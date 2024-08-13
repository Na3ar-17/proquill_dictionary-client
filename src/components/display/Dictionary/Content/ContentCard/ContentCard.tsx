'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { cn } from '@/lib/utils'
import { useContentCardDialog } from '@/store/content-card-dialog.store'
import { textAbstract } from '@/utils/textAbstract'
import { NextPage } from 'next'
import React, { useState } from 'react'
import styles from './ContentCard.module.scss'
interface IProps {}

const ContentCard: NextPage<IProps> = ({}) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const { onOpen, setId } = useContentCardDialog()

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.ctrlKey) {
			setIsChecked(!isChecked)
		}
	}

	return (
		<>
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

						<p
							onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
								if (!e.ctrlKey) {
									onOpen()
									setId('asdasd')
								}
							}}
							className={styles.sentence}
						>
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
			<ContentCardDialog />
		</>
	)
}

export default ContentCard
