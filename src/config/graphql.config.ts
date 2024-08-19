import { EnumTokens } from '@/types/auth-token.types'
import { createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import cookies from 'js-cookie'

export const httpLink = createHttpLink({
	uri: 'http://localhost:4200/graphql',
	credentials: 'include',
})

export const authLink = setContext((_, { headers }) => {
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)
	console.log(accessToken)

	return {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : '',
		},
	}
})
