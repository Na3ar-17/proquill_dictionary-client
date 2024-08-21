import { EnumTokens } from '@/types/auth-token.types'
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'
import cookies from 'js-cookie'
import { authLink, httpLink } from './graphql.config'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
	})
})
