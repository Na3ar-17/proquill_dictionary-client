import { GET_NEW_TOKENS_MUTATION } from '@/api/queries/auth.queries'
import { EnumTokens, ITokensResponse } from '@/types/auth-token.types'
import { EnumApolloErrors } from '@/types/errors.types'
import { createHttpLink, FetchResult, from, Observable } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { ErrorResponse, onError } from '@apollo/client/link/error'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import {
	ApolloClient,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'
import cookies from 'js-cookie'

export const httpLink = createHttpLink({
	uri: 'http://localhost:4200/graphql',
	credentials: 'include',
})

export const authLink = setContext((_, { headers }) => {
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}
})

async function getNewTokens() {
	try {
		const { data } = await client.mutate<ITokensResponse>({
			mutation: GET_NEW_TOKENS_MUTATION,
		})

		if (data?.getNewTokens.accessToken) {
			cookies.set(EnumTokens.ACCESS_TOKEN, data.getNewTokens.accessToken)
		}
	} catch (error) {
		console.log('Error fetching new tokens:', error)
		throw error
	}
}
export const errorLink = onError(
	({ forward, operation, graphQLErrors, networkError }: ErrorResponse) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err?.extensions?.code === EnumApolloErrors.UNAUTHENTICATED) {
					return new Observable<FetchResult>(observer => {
						getNewTokens()
							.then(() => {
								const oldHeaders = operation.getContext().headers
								const newAccessToken = cookies.get(EnumTokens.ACCESS_TOKEN)

								operation.setContext({
									headers: {
										...oldHeaders,
										authorization: newAccessToken
											? `Bearer ${newAccessToken}`
											: '',
									},
								})
								forward(operation).subscribe({
									next: observer.next.bind(observer),
									error: observer.error.bind(observer),
									complete: observer.complete.bind(observer),
								})
							})
							.catch(error => {
								console.error('Token refresh failed', error)
								observer.error(err)
							})
					})
				}
			}
		}

		if (networkError) {
			console.log(`[Network error]: ${networkError}`)
		}
	}
)

const removeTypenameLink = removeTypenameFromVariables()

const link = from([errorLink, removeTypenameLink, authLink.concat(httpLink)])

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
})
