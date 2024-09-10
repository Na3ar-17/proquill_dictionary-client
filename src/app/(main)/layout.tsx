'use client'
import useCookie from '@/hooks/useCookie'
import { sideBarCookieName, TypeIsSideBarOpen } from '@/types/sidebar.types'
import { m } from 'framer-motion'
import dynamic from 'next/dynamic'
import styles from './layout.module.scss'

const DynamicSideBar = dynamic(
	() => import('@/components/common/side-bar/SideBar')
)

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isOpen, updateCookie] = useCookie(
		sideBarCookieName,
		'true' as TypeIsSideBarOpen
	)

	return (
		<m.main
			className={styles.layout}
			animate={{
				gridTemplateColumns: isOpen === 'false' ? '50px 1fr' : '230px 1fr',
			}}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 22,
			}}
		>
			<div className={styles.sidebar}>
				<DynamicSideBar
					isOpen={isOpen as TypeIsSideBarOpen}
					setIsOpen={updateCookie}
				/>
			</div>
			<div className={styles.content}>{children}</div>
		</m.main>
	)
}
