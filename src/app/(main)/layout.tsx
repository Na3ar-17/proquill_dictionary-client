import SideBar from '@/components/common/side-bar/SideBar'
import styles from './layout.module.scss'
export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={styles.layout}>
			<div className={styles.sidebar}>
				<SideBar />
			</div>
			<div className={styles.content}>{children}</div>
		</main>
	)
}
