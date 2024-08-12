import { useAuth } from '@/api/hooks/useAuth'
import { IAuthFormData } from '@/types/auth-form.types'
import { useForm } from 'react-hook-form'

export const useAuthForm = () => {
	const form = useForm<IAuthFormData>({
		mode: 'onChange',
		defaultValues: {
			email: 'test@gmail.com',
			password: '123456',
		},
	})
	const { useRegister } = useAuth()
	const { mutation } = useRegister()

	const onSubmit = (values: IAuthFormData) => {
		mutation({ variables: { registerDto: values } })
	}

	return { form, onSubmit }
}
