'use client'

import { getClient } from '@/config/ApolloClient'
import { authLink, httpLink } from '@/config/graphql.config'
import { from } from '@apollo/client'
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

const removeTypenameLink = removeTypenameFromVariables()
const link = from([removeTypenameLink, authLink.concat(httpLink)])
function makeClient() {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link,
	})
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
