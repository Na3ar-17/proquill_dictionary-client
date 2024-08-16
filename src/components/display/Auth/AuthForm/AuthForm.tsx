'use client'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { PAGES_URL } from '@/config/pages-url.config'
import { IAuthFormData } from '@/types/auth-form.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { authFormSchema } from './form.schema'
import FormContent from './FormContent/FormContent'
import { useAuthForm } from './useAuthForm'

interface IProps {
	isRegister?: boolean
}

const AuthForm: NextPage<IProps> = ({ isRegister = false }) => {
	const form = useForm<IAuthFormData>({
		resolver: zodResolver(authFormSchema),
		mode: 'onChange',
	})
	const isFormFieldsError =
		form.formState.errors.email ||
		form.formState.errors.fullName ||
		form.formState.errors.password

	const { onSubmit, registerLoading, loginLoading } = useAuthForm({
		isRegister,
	})
	const isAuthLoading = registerLoading || loginLoading
	return (
		<Card className='mx-auto min-w-[380px] max-w-sm'>
			<CardHeader>
				<CardTitle className='text-2xl'>
					{isRegister ? 'Sign Up' : 'Login'}
				</CardTitle>
				<CardDescription>
					{isRegister
						? 'Enter your information to create an account'
						: 'Enter your email below to login to your account'}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormContent
							isButtonDisabled={!!isFormFieldsError || isAuthLoading}
							form={form}
							isRegister={isRegister}
						/>
						{isRegister ? (
							<div className='mt-4 text-center text-sm'>
								Already have an account?{' '}
								<Link href={PAGES_URL.LOGIN} className='underline'>
									Sign in
								</Link>
							</div>
						) : (
							<div className='mt-4 text-center text-sm'>
								Don&apos;t have an account?{' '}
								<Link href={PAGES_URL.REGISTER} className='underline'>
									Sign up
								</Link>
							</div>
						)}
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default AuthForm
