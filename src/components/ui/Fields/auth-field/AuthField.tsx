'use client'

import { cn } from '@/lib/utils'
import { AtSign, Eye, EyeOff, User } from 'lucide-react'
import {
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from 'react'
import styles from './AuthField.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute | 'fullName'
}

export const AuthField = forwardRef<HTMLInputElement, IProps>(
  ({ placeholder, type, ...props }, ref) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    return (
      <label className={styles.container}>
        <p className="pb-1 text-[17px]">{placeholder}</p>
        <div className="relative">
          <input
            className={cn(
              styles.input,
              'w-[330px] h-[52px] hover:border-opacity-85 transition-colors focus:border-purple-heart-500 bg-transparent px-4 pr-14 text-[17px] rounded-[11px] border-2 border-solid border-mine-shaft-800 '
            )}
            {...props}
            type={
              type === 'password'
                ? isPasswordShow
                  ? 'text'
                  : 'password'
                : type
            }
            ref={ref}
          />
          {type == 'email' && <AtSign className={styles.icon} />}
          {type == 'fullName' && <User className={styles.icon} />}
          {type === 'password' &&
            (isPasswordShow ? (
              <EyeOff
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                className={cn(styles.icon, 'cursor-pointer')}
              />
            ) : (
              <Eye
                onClick={() => setIsPasswordShow(!isPasswordShow)}
                className={cn(styles.icon, 'cursor-pointer')}
              />
            ))}
        </div>
      </label>
    )
  }
)

AuthField.displayName = 'auth-field'
