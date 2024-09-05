'use client'
import { sideBarData } from '@/data/sidebar.data'
import { cn } from '@/lib/utils'
import { TypeIsSideBarOpen } from '@/types/sidebar.types'
import { m } from 'framer-motion'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import { NextPage } from 'next'
import Element from './Element/Element'
import styles from './SideBar.module.scss'

interface IProps {
	isOpen: TypeIsSideBarOpen
	setIsOpen: (newValue: string) => void
}

const SideBar: NextPage<IProps> = ({ isOpen, setIsOpen }) => {
	const handleSideBar = () => {
		setIsOpen(isOpen === 'true' ? 'false' : 'true')
	}

	return (
		<m.aside
			animate={{ width: isOpen === 'false' ? 50 : 230 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 22,
			}}
			className={cn(styles.container, {
				[styles.hidden]: isOpen === 'false',
			})}
		>
			{isOpen === 'true' ? (
				<PanelRightOpen className={styles.actionIcon} onClick={handleSideBar} />
			) : (
				<PanelLeftOpen className={styles.actionIcon} onClick={handleSideBar} />
			)}
			<nav className={styles.nav}>
				{sideBarData.map((el, i) => (
					<Element isOpen={isOpen} data={el} key={i} />
				))}
			</nav>
		</m.aside>
	)
}

export default SideBar
