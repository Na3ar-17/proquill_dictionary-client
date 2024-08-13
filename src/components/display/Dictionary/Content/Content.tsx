'use client'

import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { Input } from '@/components/ui/input'
import { useContentCardDialog } from '@/store/content-card-dialog.store'
import { NextPage } from 'next'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'
interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	const { isDialogOpen, onOpen, setId } = useContentCardDialog()

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
								onOpen()
								setId('')
							}}
							variant={'default'}
						>
							Create new sentence
						</Button>
					</div>
				</div>
				<div className={styles.sentences}>
					<ContentCard />
				</div>
			</div>
			<ContentCardDialog />
		</section>
	)
}

export default Content
