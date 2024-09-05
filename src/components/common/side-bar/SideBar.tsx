'use client'
import { sideBarData } from '@/data/sidebar.data'
import cookies from 'js-cookie'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import { NextPage } from 'next'
import Element from './Element/Element'
import styles from './SideBar.module.scss'
interface IProps {
	isOpen: boolean
}

const SideBar: NextPage<IProps> = ({ isOpen }) => {
	console.log(isOpen)
	const handleSideBar = () => {
		cookies.set('isSideBarOpen', isOpen ? 'false' : 'true')
	}

	return (
		<aside className={styles.container}>
			{isOpen ? (
				<PanelRightOpen onClick={handleSideBar} />
			) : (
				<PanelLeftOpen onClick={handleSideBar} />
			)}
			<nav className={styles.nav}>
				{sideBarData.map((el, i) => (
					<Element data={el} key={i} />
				))}
			</nav>
		</aside>
	)
}

export default SideBar
