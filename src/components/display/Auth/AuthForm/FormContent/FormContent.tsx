import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IAuthFormData } from '@/types/auth-form.types'
import { NextPage } from 'next'
import Link from 'next/link'
import { UseFormReturn } from 'react-hook-form'
import { FaGoogle } from 'react-icons/fa'

interface IProps {
	isRegister: boolean
	form: UseFormReturn<IAuthFormData, any, undefined>
	isButtonDisabled: boolean
}

const FormContent: NextPage<IProps> = ({
	isRegister,
	form,
	isButtonDisabled,
}) => {
	return (
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
					{form.formState.errors.email && form.formState.errors.email.message}
				</p>
			</div>

			<div className='grid gap-2'>
				<div className='flex items-center'>
					<Label htmlFor='password'>Password</Label>
					{!isRegister && (
						<Link href='#' className='ml-auto inline-block text-sm underline'>
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
				disabled={isButtonDisabled}
				type='submit'
				className='w-full cursor-pointer'
			>
				{isRegister ? 'Sign Up' : 'Login'}
			</Button>
			<Button
				variant='outline'
				type='button'
				className='w-full flex items-center gap-2 cursor-pointer'
			>
				<span>Continue with Google</span>
				<FaGoogle size={15} />
			</Button>
		</div>
	)
}

export default FormContent
