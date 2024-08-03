import ContextMenuComponent from '@/components/ui/Menus/context-menu/ContextMenu'
import { NextPage } from 'next'
import styles from './Dictionary.module.scss'
const Dictionary: NextPage = () => {
	return (
		<section className={styles.container}>
			<div className='text-2xl font-semibold'>My themes</div>
			<div className={styles.cards}>
				<div className={styles.card}>
					<div className={styles.learningProgress}></div>
				</div>
			</div>
		</section>
	)
}

export default Dictionary
