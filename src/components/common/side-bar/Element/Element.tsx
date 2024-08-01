import { cn } from '@/lib/utils'
import { ISideBarElement } from '@/types/sidebar.types'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './Element.module.scss'
interface IProps {
	data: ISideBarElement
}

const Element: NextPage<IProps> = ({ data }) => {
	const { Icon, href, label } = data
	return (
		<div className={styles.element}>
			{label === 'Log Out' ? (
				<div className={styles.label}>
					<Icon className={styles.icon} />
					<p className={styles.text}>{label}</p>
				</div>
			) : (
				<Link className={styles.label} href={href}>
					<Icon className={styles.icon} />
					<p className={styles.text}>{label}</p>
				</Link>
			)}
		</div>
	)
}

export default Element
