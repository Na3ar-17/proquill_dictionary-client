import { GET_NEW_TOKENS_MUTATION } from '@/api/queries/auth.queries'
import { EnumTokens } from '@/types/auth-token.types'
import { EnumApolloErrors } from '@/types/errors.types'
import { createHttpLink, from, Observable } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import {
	ApolloClient,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'
import cookies from 'js-cookie'

export const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_API_URL + '/graphql',
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
		const { data } = await client.mutate({
			mutation: GET_NEW_TOKENS_MUTATION,
		})

		if (data?.tokens.accessToken) {
			cookies.set(EnumTokens.ACCESS_TOKEN, data.tokens.accessToken)
		}
	} catch (error) {
		console.log('Error fetching new tokens:', error)
		throw error
	}
}

export const errorLink = onError(
	({ forward, operation, graphQLErrors, networkError }) => {
		if (
			graphQLErrors?.some(
				err => err?.extensions?.code === EnumApolloErrors.UNAUTHENTICATED
			)
		) {
			return new Observable(observer => {
				getNewTokens()
					.then(() => {
						const oldHeaders = operation.getContext().headers
						const newAccessToken = cookies.get(EnumTokens.ACCESS_TOKEN)
						operation.setContext({
							headers: {
								...oldHeaders,
								authorization: newAccessToken ? `Bearer ${newAccessToken}` : '',
							},
						})
						forward(operation).subscribe(observer)
					})
					.catch(error => {
						console.error('Token refresh failed', error)
						observer.error(error)
					})
			})
		}

		if (networkError) {
			console.log(`[Network error]: ${networkError}`)
		}
	}
)

const removeTypenameLink = removeTypenameFromVariables()

export const link = from([
	errorLink,
	removeTypenameLink,
	authLink.concat(httpLink),
])

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link,
})
