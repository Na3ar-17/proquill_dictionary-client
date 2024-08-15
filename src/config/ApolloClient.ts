import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from '@apollo/experimental-nextjs-app-support'
import { authLink, httpLink } from './graphql.config'

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: authLink.concat(httpLink),
	})
})
