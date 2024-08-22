'use client'
import { useContent } from '@/api/hooks/useContent'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { Input } from '@/components/ui/input'
import { IContetnDialog } from '@/types/content-dialog.types'
import { IContentForm } from '@/types/content-form.types'
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
	const { useGetContent, useCreateContent, useGetOneContent } = useContent()
	const { data, error, loading } = useGetContent({ themeId: id })
	const { mutation, createContentError, createContentLoading } =
		useCreateContent()

	const handleCreate = ({
		createContentInput,
	}: {
		createContentInput: IContentForm
	}) => {
		mutation({
			variables: { createContentInput: { ...createContentInput, themeId: id } },
		})
	}

	return (
		<section className={styles.container}>
			<Heading text='Counter Striike' />
			<div className={styles.content}>
				<div className={styles.actions}>
					<div>{/* <Input placeholder='Type to search' /> */}</div>
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
					{!data || error ? (
						<div>Error</div>
					) : loading ? (
						<div>loading</div>
					) : (
						data.getAllContent.map(el => (
							<ContentCard data={el} setDialog={setDialog} key={el.id} />
						))
					)}
				</div>
			</div>
			<ContentCardDialog
				onCreate={handleCreate}
				dialog={dialog}
				setDialog={setDialog}
				themeId={id}
			/>
		</section>
	)
}

export default Content
