'use client'
import { link } from '@/config/graphql.config'
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from '@apollo/experimental-nextjs-app-support'

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

// 'use client'
// import { link } from '@/config/graphql.config'
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// function makeClient() {
// 	return new ApolloClient({
// 		cache: new InMemoryCache(),
// 		link,
// 	})
// }

// export function ApolloWrapper({ children }: React.PropsWithChildren) {
// 	return <ApolloProvider client={makeClient()}>{children}</ApolloProvider>
// }
