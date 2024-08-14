'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support'

function makeClient() {
	const httpLink = new HttpLink({
		uri: 'http://localhost:4200/graphql',
		fetchOptions: { cache: 'no-store' },
		credentials: 'include',
	})

	return new ApolloClient({
		cache: new InMemoryCache(),
		link: httpLink,
	})
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	)
}
