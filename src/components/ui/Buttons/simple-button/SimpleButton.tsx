import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import styles from './SimpleButton.module.scss'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
}

export const SimpleButton = forwardRef<HTMLButtonElement, IProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          className,
          'bg-purple-heart-900 px-8 py-2 border-[3px] border-solid border-purple-heart-900 rounded-lg text-lg font-[500] tracking-wider cursor-pointer transition-all hover:bg-opacity-0 active:translate-y-0.5',
          styles.button
        )}
        {...props}
      >
        {label}
      </button>
    )
  }
)

SimpleButton.displayName = 'simple-button'
