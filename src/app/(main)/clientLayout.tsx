'use client'
import SideBar from '@/components/common/side-bar/SideBar'
import useCookie from '@/hooks/useCookie'
import { sideBarCookieName, TypeIsSideBarOpen } from '@/types/sidebar.types'
import { m } from 'framer-motion'
import { PropsWithChildren, useEffect, useState } from 'react'
import styles from './layout.module.scss'
interface IProps extends PropsWithChildren {
	sideBarState: string
}

export default function ClientLayout({ sideBarState, children }: IProps) {
	const [isOpen, setIsOpen] = useState<string>(
		sideBarState == 'true' ? 'false' : 'true'
	)

	const [cookieIsOpen, updateCookie] = useCookie(
		sideBarCookieName,
		sideBarState as TypeIsSideBarOpen
	)

	useEffect(() => {
		if (cookieIsOpen !== isOpen) {
			setIsOpen(cookieIsOpen)
		}
	}, [cookieIsOpen])

	const handleToggleSidebar = () => {
		const newState = isOpen === 'true' ? 'false' : 'true'
		setIsOpen(newState)
		updateCookie(newState)
	}
	return (
		<m.main
			className={styles.layout}
			animate={{
				gridTemplateColumns: isOpen === 'false' ? '50px 1fr' : '230px 1fr',
			}}
		>
			<div className={styles.sidebar}>
				<SideBar isOpen={cookieIsOpen} setIsOpen={handleToggleSidebar} />
			</div>
			<div className={styles.content}>{children}</div>
		</m.main>
	)
}
