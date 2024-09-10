import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface ISideBarElement {
	Icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
	label: string
	href: string
	disabled?: boolean
}

export const sideBarCookieName = 'isSideBarOpen'

export type TypeIsSideBarOpen = 'true' | 'false'
