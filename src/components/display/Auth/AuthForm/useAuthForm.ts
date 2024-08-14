import { useAuth } from '@/api/hooks/useAuth'
import { IAuthFormData } from '@/types/auth-form.types'

export const useAuthForm = ({ isRegister }: { isRegister: boolean }) => {
	const { useRegister } = useAuth()
	const { mutation: register, loading: registerLoading } = useRegister()
	const onSubmit = (values: IAuthFormData) => {
		if (isRegister) {
			register({ variables: { registerDto: values } })
		} else {
		}
	}

	return { onSubmit, registerLoading }
}
