import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import ProgressBar from '@/components/ui/custom/progress-bar/ProgressBar'
import { ITheme } from '@/entities/theme.entity'
import { NextPage } from 'next'
import Link from 'next/link'
import styles from './ThemeCard.module.scss'

interface IProps {
	data: ITheme
}

const ThemeCard: NextPage<IProps> = ({ data: { createdAt, title } }) => {
	return (
		<BaseContextMenu>
			<Card className='grid hover:bg-muted transition-colors px-2 overflow-hidden  relative grid-cols-[300px_1fr] items-center'>
				<CardHeader>
					<CardTitle>
						<Link href={'#'} className='cursor-pointer hover:underline'>
							{title}
						</Link>
					</CardTitle>
					<p className='text-sm text-zinc-500'>{createdAt.toString()}</p>
				</CardHeader>
				<CardContent className='w-full h-full flex items-end justify-end'>
					<div className={styles['progress-container']}>
						<ProgressBar className='h-[5px]' />
					</div>
					<p className='text-base text-zinc-500 font-semibold'>20 items</p>
				</CardContent>
			</Card>
		</BaseContextMenu>
	)
}

export default ThemeCard
