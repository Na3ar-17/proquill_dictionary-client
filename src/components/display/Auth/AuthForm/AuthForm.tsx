'use client'
import { NextPage } from 'next'
import styles from './AuthForm.module.scss'
import { cn } from '@/lib/utils'
import { AuthField } from '@/components/ui/Fields/auth-field/AuthField'
const AuthForm: NextPage = () => {
  return (
    <div>
      <AuthField type="email" placeholder="Email adress" />
      <br />
      <AuthField type="password" placeholder="Password" />
      <br />
      <AuthField type="fullName" placeholder="Full name" />
    </div>
  )
}

export default AuthForm
