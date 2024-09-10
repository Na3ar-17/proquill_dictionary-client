import { useAuth } from '@/api/hooks/useAuth'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ISideBarElement } from '@/types/sidebar.types'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from '../SideBar.module.scss'

interface IProps {
	data: ISideBarElement
	isOpen: string
}

const Element: NextPage<IProps> = ({ data, isOpen }) => {
	const { Icon, href, label, disabled } = data
	const { useLogOut } = useAuth()
	const [loaded, setLoaded] = useState(false)
	const { push } = useRouter()

	const { loading, mutation } = useLogOut()
	useEffect(() => setLoaded(true), [])

	return label === 'Log Out' ? (
		<Button
			disabled={loading}
			onClick={() => mutation()}
			variant={'ghost'}
			className={styles.element}
		>
			<Icon className={styles.icon} />
			{isOpen === 'true' && <span className={styles.text}>{label}</span>}
		</Button>
	) : (
		<div
			onClick={() => {
				if (!disabled) {
					push(href)
				}
			}}
			className={cn(styles.element, {
				[styles.disabled]: disabled,
			})}
		>
			<Icon className={styles.icon} />
			{isOpen === 'true' && <span className={styles.text}>{label}</span>}
		</div>
	)
}

export default Element
