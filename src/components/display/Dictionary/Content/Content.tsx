'use client'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { Input } from '@/components/ui/input'
import { IContetnDialog } from '@/types/content-dialog.types'
import { NextPage } from 'next'
import { useState } from 'react'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'

interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	const [dialog, setDialog] = useState<IContetnDialog>({
		isOpen: false,
		contentCardId: '',
	})

	return (
		<section className={styles.container}>
			<Heading text='Counter Striike' />
			<div className={styles.content}>
				<div className={styles.actions}>
					<div>
						<Input placeholder='Type to search' />
					</div>
					<div>
						<Button
							onClick={() => {
								setDialog({
									contentCardId: '',
									isOpen: true,
								})
							}}
							variant={'default'}
						>
							Create new sentence
						</Button>
					</div>
				</div>
				<div className={styles.sentences}>
					<ContentCard setDialog={setDialog} />
				</div>
			</div>
			<ContentCardDialog dialog={dialog} setDialog={setDialog} />
		</section>
	)
}

export default Content
