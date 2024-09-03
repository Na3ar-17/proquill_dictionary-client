'use client'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { IContent } from '@/entities/content.entity'
import { cn } from '@/lib/utils'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import type { IContentForm } from '@/types/content-form.types'
import { dateFormatter } from '@/utils/dateFormatter'
import { NextPage } from 'next'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import styles from './ContentCard.module.scss'

interface IProps {
	data: IContent
	setIdsState: Dispatch<SetStateAction<string[]>>
	handleDelete: ({ ids }: { ids: string[] }) => void
}

const ContentCard: NextPage<IProps> = ({ data, setIdsState, handleDelete }) => {
	const [isChecked, setIsChecked] = useState<boolean>(false)
	const { setValue } = useFormContext<IContentForm>()
	const { onOpen } = useContentCardDialogStore()

	const handleIdsState = () => {
		setIdsState(prev => {
			if (!prev) return prev
			if (isChecked) {
				return [...prev.filter(el => el !== data.id)]
			} else {
				return [...prev, data.id]
			}
		})
	}
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.ctrlKey) {
			setIsChecked(!isChecked)
			handleIdsState()
		}
	}
	const onCheckedChange = () => {
		setIsChecked(!isChecked)
		handleIdsState()
	}

	return (
		<>
			<BaseContextMenu
				onDelete={() => handleDelete({ ids: [data.id] })}
				isRename={false}
			>
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
							onCheckedChange={onCheckedChange}
						/>
						<div
							onClick={(e: React.MouseEvent<HTMLParagraphElement>) => {
								if (!e.ctrlKey) {
									setValue('id', data.id)
									onOpen()
								}
							}}
							className={styles.sentence}
						>
							{data.sentence.replace(/(<([^>]+)>)/gi, '')}
						</div>
					</CardContent>
					<CardFooter className='pb-2'>
						<p className='mt-auto text-sm text-zinc-500'>
							{dateFormatter(data.createdAt)}
						</p>
					</CardFooter>
				</Card>
			</BaseContextMenu>
			<ContentCardDialog />
		</>
	)
}

export default ContentCard
