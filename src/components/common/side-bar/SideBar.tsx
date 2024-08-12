import { sideBarData } from '@/data/sidebar.data'
import {
	Badge,
	Home,
	Icon,
	LineChart,
	Package,
	ShoppingCart,
	Users,
} from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import Element from './Element/Element'
import styles from './SideBar.module.scss'
const SideBar: NextPage = () => {
	return (
		<aside className={styles.container}>
			<nav className={styles.nav}>
				{sideBarData.map((el, i) => (
					<Element data={el} key={i} />
				))}
			</nav>
		</aside>
	)
}

export default SideBar
