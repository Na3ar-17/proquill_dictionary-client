import { cn } from '@/lib/utils'
import { NextPage } from 'next'
import { forwardRef, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
}

const TransparentField = forwardRef<HTMLInputElement, IProps>(
	({ className, ...rest }, ref) => {
		return (
			<label className={cn(className, 'bg-transparent')}>
				<input
					className='border border-solid  border-zinc-500 rounded-md text-base bg-transparent  px-3 py-2.5 outline-none w-full h-full'
					type='text'
					{...rest}
					ref={ref}
				/>
			</label>
		)
	}
)

TransparentField.displayName = ' transparent-field'
export default TransparentField
