import { cookies } from 'next/headers'
import ClientLayout from './clientLayout'

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = cookies()
	const sideBarState = cookieStore.get('isSideBarOpen')?.value

	return (
		<ClientLayout sideBarState={sideBarState || 'true'}>
			{children}
		</ClientLayout>
	)
}
