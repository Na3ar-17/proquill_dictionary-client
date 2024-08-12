import { gql, useMutation } from '@apollo/client'
import cookie from 'js-cookie'
import { useEffect } from 'react'

export const useAuth = () => {
	const useRegister = () => {
		const REGISTER_MUTATION = gql`
			mutation register($registerDto: CreateUserInput!) {
				register(registerDto: $registerDto) {
					user {
						id
						email
						createdAt
						updatedAt
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
			}
		}, [data])

		return { mutation, data, error, loading }
	}

	return { useRegister }
}