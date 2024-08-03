'use client'
import { SimpleButton } from '@/components/ui/Buttons/simple-button/SimpleButton'
import { AuthField } from '@/components/ui/Fields/auth-field/AuthField'
import { SITE_NAME } from '@/constants/seo.constants'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import illustration from '../../../../../public/auth-illustration.png'
import vector from '../../../../../public/Vector.png'
import vector2 from '../../../../../public/Vector2.png'
import vector3 from '../../../../../public/Vector3.png'
import vector4 from '../../../../../public/Vector4.png'
import styles from './AuthForm.module.scss'

import axios from '@/api/interceptors'
import { gql } from '@apollo/client'
import request from 'graphql-request'
interface IProps {
	isRegister?: boolean
}

const AuthForm: NextPage<IProps> = ({ isRegister = false }) => {
	// const testQuery = gql`
	// 	query findOne {
	// 		findOne {
	// 			id
	// 			email
	// 		}
	// 	}
	// `

	// const { data } = useQuery({
	// 	queryKey: ['test'],
	// 	queryFn: async () => request('http://localhost:4200/graphql', testQuery),
	// })

	// console.log(data)

	// const testQuery = `
	// 	query findOne {
	// 		findOne {
	// 			id
	// 			createdAt
	// 			email
	// 		}
	// 	}
	// `

	// const { data } = useQuery({
	// 	queryKey: ['test'],
	// 	queryFn: async () => {
	// 		const { data } = await axios.post('', {
	// 			query: testQuery,
	// 		})
	// 		return data
	// 	},
	// })

	// console.log(data)

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<header className={styles.header}>
					<p className={styles.heading}>
						{isRegister ? 'Registration' : 'Login'}
					</p>
					<p>
						{isRegister
							? 'Enter your new account details'
							: 'Enter your account details'}
					</p>
				</header>
				<form className={styles.form}>
					{isRegister && (
						<AuthField type='username' inputPlaceholder='Username' />
					)}
					<AuthField type='email' inputPlaceholder='E-mail' />
					<AuthField type='password' inputPlaceholder='Password' />
					<SimpleButton
						type='button'
						label={isRegister ? 'Sign up' : 'Sign in'}
						className='mt-2'
					/>
					<div className={styles.link}>
						<p className='text-mine-shaft-300'>
							{isRegister
								? 'Already have an account?'
								: "Don't have an account?"}
						</p>
						<Link
							className='text-purple-heart-500 underline'
							href={isRegister ? '/login' : '/registration'}
						>
							{isRegister ? 'Sign in' : 'Sign up'}
						</Link>
					</div>
				</form>
			</div>
			<div className={styles.illustration}>
				<div className={styles.text}>
					<span className='font-bold text-5xl'>Welcome to</span> {SITE_NAME}
					<br />
					<span className='text-base'>
						{isRegister
							? 'Register to create new account'
							: 'Login to access your account'}
					</span>
				</div>
				<Image
					className={styles.image}
					layout='responsive'
					src={illustration}
					alt='illustration'
				/>
				<Image className={styles.vector1} src={vector} alt='vector' />
				<Image className={styles.vector2} src={vector2} alt='vector' />
				<Image className={styles.vector3} src={vector3} alt='vector' />
				<Image className={styles.vector4} src={vector4} alt='vector' />
			</div>
		</div>
	)
}

export default AuthForm
