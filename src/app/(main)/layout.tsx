import SideBar from '@/components/common/side-bar/SideBar'
import { cookies } from 'next/headers'
import styles from './layout.module.scss'

export default async function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const isOpen = await cookies().get('isSideBarOpen')?.value

	return (
		<main className={styles.layout}>
			<div className={styles.sidebar}>
				<SideBar isOpen={!!isOpen} />
			</div>
			<div className={styles.content}>{children}</div>
		</main>
	)
}
