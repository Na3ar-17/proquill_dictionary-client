import { PAGES_URL } from '@/config/pages-url.config'
import { ISideBarElement } from '@/types/sidebar.types'
import { LayoutDashboard, List, LogOut, User } from 'lucide-react'
export const sideBarData: ISideBarElement[] = [
	{
		label: 'Dashboard',
		href: '',
		Icon: LayoutDashboard,
	},
	{
		label: 'Profile',
		href: '',
		Icon: User,
	},
	{
		label: 'Dictionary',
		href: PAGES_URL.DICTIONARY,
		Icon: List,
	},
	{
		label: 'Log Out',
		href: '',
		Icon: LogOut,
	},
]
