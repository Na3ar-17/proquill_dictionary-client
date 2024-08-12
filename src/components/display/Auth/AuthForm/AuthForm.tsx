import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PAGES_URL } from '@/config/pages-url.config'
import { NextPage } from 'next'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'

interface IProps {
	isRegister?: boolean
}

const AuthForm: NextPage<IProps> = ({ isRegister = false }) => {
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
				<div className='grid gap-4'>
					{isRegister && (
						<div className='grid gap-2'>
							<Label htmlFor='full-name'>Full Name</Label>
							<Input id='full-name' placeholder='Jhon Doe' required />
						</div>
					)}
					<div className='grid gap-2'>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							type='email'
							placeholder='m@example.com'
							required
						/>
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
						<Input id='password' type='password' required />
					</div>
					<Button type='submit' className='w-full cursor-pointer'>
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
			</CardContent>
		</Card>
	)
}

export default AuthForm
