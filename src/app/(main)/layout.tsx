'use client'
import useCookie from '@/hooks/useCookie'
import { sideBarCookieName, TypeIsSideBarOpen } from '@/types/sidebar.types'
import { m } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import styles from './layout.module.scss'
import Loading from './loading'

const DynamicSideBar = dynamic(
	() => import('@/components/common/side-bar/SideBar')
	// {
	// 	loading: () => <Loading />,
	// }
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
		<Suspense fallback={<Loading />}>
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
		</Suspense>
	)
}
