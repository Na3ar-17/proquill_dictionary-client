import { PAGES_URL } from '@/config/pages-url.config'
import { graphql } from '@/gql'
import { EnumTokens } from '@/types/auth-token.types'
import { useMutation } from '@apollo/client'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { GET_NEW_TOKENS_MUTATION } from '../queries/auth.queries'

export const useAuth = () => {
	const { replace } = useRouter()

	const useRegister = () => {
		const REGISTER_MUTATION = graphql(`
			mutation registration($registerDto: CreateUserInput!) {
				register(registerDto: $registerDto) {
					user {
						id
						email
						profilePictureUrl
						fullName
						createdAt
					}
					accessToken
				}
			}
		`)

		const [mutation, { data, error, loading }] = useMutation(
			REGISTER_MUTATION,
			{
				context: {
					fetchOptions: {
						credentials: 'include',
					},
				},
				onCompleted: ({ register }) => {
					cookie.set('accessToken', register.accessToken)
					replace(PAGES_URL.DICTIONARY)
				},
			}
		)

		return { mutation, data, error, loading }
	}
	const useLogin = () => {
		const LOGIN_MUTATION = graphql(`
			mutation login($loginDto: CreateUserInput!) {
				login(loginDto: $loginDto) {
					user {
						id
						email
						profilePictureUrl
						fullName
					}
					accessToken
				}
			}
		`)

		const [mutation, { data, error, loading }] = useMutation(LOGIN_MUTATION, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
			onCompleted: ({ login }) => {
				cookie.set('accessToken', login.accessToken, { expires: 0.003 })
				replace(PAGES_URL.DICTIONARY)
			},
		})

		return { mutation, data, error, loading }
	}

	const useLogOut = () => {
		const LOGOUT_MUTATION = graphql(`
			mutation logOut {
				logout
			}
		`)

		const [mutation, { data, error, loading }] = useMutation(LOGOUT_MUTATION, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
			onCompleted: ({ logout }) => {
				if (logout) {
					cookie.remove(EnumTokens.ACCESS_TOKEN)
					replace(PAGES_URL.LOGIN)
				}
			},
			onError: e => {
				console.log(e.message)
			},
		})

		return { mutation, loading }
	}
	const useGetNewTokens = () => {
		const mutation = useMutation(GET_NEW_TOKENS_MUTATION, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
		})
		return mutation
	}
	return { useRegister, useLogin, useLogOut, useGetNewTokens }
}
