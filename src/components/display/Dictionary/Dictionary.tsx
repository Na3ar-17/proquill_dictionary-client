import ContextMenuComponent from '@/components/ui/Menus/context-menu/ContextMenu'
import { NextPage } from 'next'
import styles from './Dictionary.module.scss'
const Dictionary: NextPage = () => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>My themes</div>
			<ContextMenuComponent>
				<div>Right click</div>
			</ContextMenuComponent>
		</section>
	)
}

export default Dictionary
