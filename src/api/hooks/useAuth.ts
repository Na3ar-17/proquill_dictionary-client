import { PAGES_URL } from '@/config/pages-url.config'
import { EnumTokens } from '@/types/auth-token.types'
import { useMutation } from '@apollo/client'
import cookie from 'js-cookie'
import { useRouter } from 'next/navigation'
import {
	LOGIN_MUTATION,
	LOGOUT_MUTATION,
	REGISTER_MUTATION,
} from '../queries/auth.queries'

export const useAuth = () => {
	const { replace } = useRouter()

	const useRegister = () => {
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

	return { useRegister, useLogin, useLogOut }
}
