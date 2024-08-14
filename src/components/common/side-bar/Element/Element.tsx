import { useAuth } from '@/api/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { ISideBarElement } from '@/types/sidebar.types'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './Element.module.scss'

interface IProps {
	data: ISideBarElement
}

const Element: NextPage<IProps> = ({ data }) => {
	const { Icon, href, label } = data
	const { useLogOut } = useAuth()

	const { loading, mutation } = useLogOut()

	return label === 'Log Out' ? (
		<Button
			disabled={loading}
			onClick={() => mutation()}
			variant={'ghost'}
			className={styles.element}
		>
			<Icon className='size-5' />
			{label}
		</Button>
	) : (
		<Link href={href} className={styles.element}>
			<Icon className='size-5' />
			<span>{label}</span>
		</Link>
	)
}

export default Element
