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
		<Link href={href} className={styles.element}>
			<Icon className='size-5' />
			<span>{label}</span>
		</Link>
	)
}

export default Element
