'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { IContent } from '@/entities/content.entity'
import { cn } from '@/lib/utils'
import { IContetnDialog } from '@/types/content-dialog.types'
import { textAbstract } from '@/utils/textAbstract'
import { NextPage } from 'next'
import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './ContentCard.module.scss'
interface IProps {
	setDialog: Dispatch<SetStateAction<IContetnDialog>>
	data: IContent
}

const ContentCard: NextPage<IProps> = ({ setDialog, data }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.ctrlKey) {
			setIsChecked(!isChecked)
		}
	}

	return (
		<>
			<BaseContextMenu onDelete={() => {}} isRename={false}>
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
									setDialog({
										isOpen: true,
										contentCardId: 'asdasd',
									})
								}
							}}
							className={styles.sentence}
						>
							{textAbstract(data.sentence, 42)}
						</p>
					</CardContent>
					<CardFooter className='pb-2'>
						<p className='mt-auto text-sm text-zinc-500'>
							{data.createdAt.toString()}
						</p>
					</CardFooter>
				</Card>
			</BaseContextMenu>
			<ContentCardDialog />
		</>
	)
}

export default ContentCard
