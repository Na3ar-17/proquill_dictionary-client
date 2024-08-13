'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { cn } from '@/lib/utils'
import { textAbstract } from '@/utils/textAbstract'
import { NextPage } from 'next'
import { useState } from 'react'
import styles from './ContentCard.module.scss'
interface IProps {}

const ContentCard: NextPage<IProps> = ({}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.ctrlKey) {
			setIsChecked(!isChecked)
		}
	}

	return (
		<BaseContextMenu isRename={false}>
			<Card
				onClick={handleClick}
				className={cn(styles.card, {
					[styles.checked]: isChecked,
				})}
			>
				<CardContent className={styles.content}>
					<Checkbox
						className={styles.checkbox}
						checked={isChecked}
						onCheckedChange={() => setIsChecked(!isChecked)}
					/>
					<p className={styles.sentence}>
						{textAbstract(
							`Ten years you have been king, and yet not once have you ask me to be
							your hand`,
							42
						)}
					</p>
				</CardContent>
				<CardFooter className='pb-2'>
					<p className='mt-auto text-sm text-zinc-500'>12.08.2024</p>
				</CardFooter>
			</Card>
		</BaseContextMenu>
	)
}

export default ContentCard
