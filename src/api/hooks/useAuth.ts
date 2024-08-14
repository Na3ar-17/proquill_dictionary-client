import { PAGES_URL } from '@/config/pages-url.config'
import { gql, useMutation } from '@apollo/client'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useAuth = () => {
	const { replace } = useRouter()
	const useRegister = () => {
		const REGISTER_MUTATION = gql`
			mutation register($registerDto: CreateUserInput!) {
				register(registerDto: $registerDto) {
					user {
						id
						email
						profilePictureUrl
						fullName
					}
					accessToken
				}
			}
		`

		const [mutation, { data, error, loading }] = useMutation(
			REGISTER_MUTATION,
			{
				context: {
					fetchOptions: {
						credentials: 'include',
					},
				},
			}
		)
		useEffect(() => {
			if (data?.register?.accessToken) {
				cookie.set('accessToken', data.register.accessToken)
				replace(PAGES_URL.DICTIONARY)
			}
		}, [data])

		return { mutation, data, error, loading }
	}
	const useLogin = () => {
		const LOGIN_MUTATION = gql`
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
		`

		const [mutation, { data, error, loading }] = useMutation(LOGIN_MUTATION, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
		})
		useEffect(() => {
			if (data?.login?.accessToken) {
				cookie.set('accessToken', data.login.accessToken)
				replace(PAGES_URL.DICTIONARY)
			}
		}, [data])

		return { mutation, data, error, loading }
	}

	return { useRegister, useLogin }
}
