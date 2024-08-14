import { useAuth } from '@/api/hooks/useAuth'
import { IAuthFormData } from '@/types/auth-form.types'

export const useAuthForm = ({ isRegister }: { isRegister: boolean }) => {
	const { useRegister, useLogin } = useAuth()
	const { mutation: register, loading: registerLoading } = useRegister()
	const { mutation: login, loading: loginLoading } = useLogin()

	const onSubmit = (values: IAuthFormData) => {
		if (isRegister) {
			register({ variables: { registerDto: values } })
		} else {
			login({ variables: { loginDto: values } })
		}
	}

	return { onSubmit, registerLoading, loginLoading }
}
