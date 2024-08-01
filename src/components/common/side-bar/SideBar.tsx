import { sideBarData } from '@/data/sidebar.data'
import { NextPage } from 'next'
import Element from './Element/Element'
import styles from './SideBar.module.scss'
const SideBar: NextPage = () => {
	return (
		<aside className={styles.container}>
			<div className='flex flex-col gap-3 w-full px-3 h-full pt-40 pb-12'>
				{sideBarData.map((el, i) => (
					<Element data={el} key={i} />
				))}
			</div>
		</aside>
	)
}

export default SideBar
