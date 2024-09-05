'use client'
import { sideBarData } from '@/data/sidebar.data'
import { cn } from '@/lib/utils'
import { m } from 'framer-motion'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import styles from './SideBar.module.scss'

const PanelLeftOpen = dynamic(() =>
	import('lucide-react').then(mod => mod.PanelLeftOpen)
)
const PanelRightOpen = dynamic(() =>
	import('lucide-react').then(mod => mod.PanelRightOpen)
)
const Element = dynamic(() => import('./Element/Element'))

interface IProps {
	isOpen: string
	setIsOpen: () => void
}

const SideBar: NextPage<IProps> = ({ isOpen, setIsOpen }) => {
	return (
		<m.aside
			animate={{ width: isOpen === 'false' ? 50 : 230 }}
			transition={{
				type: 'spring',
				stiffness: 300,
				damping: 25,
			}}
			className={cn(styles.container, {
				[styles.hidden]: isOpen === 'false',
			})}
		>
			{isOpen === 'true' ? (
				<PanelRightOpen className={styles.actionIcon} onClick={setIsOpen} />
			) : (
				<PanelLeftOpen className={styles.actionIcon} onClick={setIsOpen} />
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
