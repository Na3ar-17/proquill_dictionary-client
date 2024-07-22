import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  className?: string
}

export const GradientButton = forwardRef<HTMLButtonElement, IProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <button className={cn(className, '')} {...props}>
        {label}
      </button>
    )
  }
)

GradientButton.displayName = 'gradient-button'
