import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'
import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
interface IProps extends PropsWithChildren {
	label: string
}

const TooltipComponent: NextPage<IProps> = ({ children, label }) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger>{children}</TooltipTrigger>
				<TooltipContent>
					<p>{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export default TooltipComponent
