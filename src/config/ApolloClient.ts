import { EnumTokens } from '@/api/services/auth-tokens.service'
import { createHttpLink, HttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'
import cookies from 'js-cookie'

const httpLink = createHttpLink({
	uri: 'http://localhost:4200/graphql',
	credentials: 'include',
})
const authLink = setContext((_, { headers }) => {
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}
})

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
	})
})
