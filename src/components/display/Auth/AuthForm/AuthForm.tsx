'use client'
import { NextPage } from 'next'
import { cn } from '@/lib/utils'
import { SimpleButton } from '@/components/ui/Buttons/simple-button/SimpleButton'
const AuthForm: NextPage = () => {
  return (
    <div>
      <SimpleButton label="Sign in" />
    </div>
  )
}

export default AuthForm
