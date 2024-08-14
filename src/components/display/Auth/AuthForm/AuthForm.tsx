'use client'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PAGES_URL } from '@/config/pages-url.config'
import { IAuthFormData } from '@/types/auth-form.types'
import { NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formSchema = z.object({
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
	email: z.string().min(6, {
		message: 'Email must be at least 6 characters.',
	}),
	fullName: z.string().optional(),
})

interface IProps {
	isRegister?: boolean
}

const AuthForm: NextPage<IProps> = ({ isRegister = false }) => {
	const form = useForm<IAuthFormData>({
		resolver: zodResolver(formSchema),
		mode: 'onChange',
	})

	const isFormFieldsError =
		form.formState.errors.email ||
		form.formState.errors.fullName ||
		form.formState.errors.password

	const onSubmit = (data: IAuthFormData) => {
		console.log(data)
	}

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
						<div className='grid gap-4'>
							{isRegister && (
								<div className='grid gap-2'>
									<Label htmlFor='full-name'>Full Name</Label>
									<Input
										id='full-name'
										placeholder='Jhon Doe'
										{...form.register('fullName', {
											pattern: {
												value: /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/,
												message: 'Invalid fullname',
											},
										})}
									/>

									<p className='text-destructive text-sm'>
										{form.formState.errors.fullName &&
											form.formState.errors.fullName.message}
									</p>
								</div>
							)}
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='text'
									placeholder='m@example.com'
									{...form.register('email', {
										required: {
											message: 'This is required field',
											value: true,
										},
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'Invalid email address',
										},
									})}
								/>
								<p className='text-destructive text-sm'>
									{form.formState.errors.email &&
										form.formState.errors.email.message}
								</p>
							</div>

							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Password</Label>
									{!isRegister && (
										<Link
											href='#'
											className='ml-auto inline-block text-sm underline'
										>
											Forgot your password?
										</Link>
									)}
								</div>
								<Input
									id='password'
									type='password'
									{...form.register('password', {
										required: {
											message: 'This is required field',
											value: true,
										},
									})}
								/>
								<p className='text-destructive text-sm'>
									{form.formState.errors.password &&
										form.formState.errors.password.message}
								</p>
							</div>
							<Button
								disabled={!!isFormFieldsError}
								type='submit'
								className='w-full cursor-pointer'
							>
								{isRegister ? 'Sign Up' : 'Login'}
							</Button>
							<Button
								variant='outline'
								className='w-full flex items-center gap-2 cursor-pointer'
							>
								<span>Continue with Google</span>
								<FaGoogle size={15} />
							</Button>
						</div>
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
