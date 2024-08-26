'use client'
import { useContent } from '@/api/hooks/useContent'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { IContentForm } from '@/types/content-form.types'
import { NextPage } from 'next'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'

interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	const methods = useForm<IContentForm>()
	const { onOpen } = useContentCardDialogStore()

	const { useGetContent, useCreateContent } = useContent()
	const { data, error, loading } = useGetContent({ themeId: id })

	return (
		<section className={styles.container}>
			<Heading text={'Add Title'} />
			<FormProvider {...methods}>
				<div className={styles.content}>
					<div className={styles.actions}>
						<div>
							<Button
								onClick={() => {
									methods.reset({
										sentence: '',
										id: '',
										themeId: '',
										transcription: '',
										translation: '',
									})
									onOpen()
								}}
								variant={'default'}
							>
								Create new sentence
							</Button>
						</div>
					</div>
					<div className={styles.sentences}>
						{error ? (
							<div>Error</div>
						) : loading ? (
							<div>loading</div>
						) : (
							data?.getAllContent.map(el => (
								<ContentCard data={el} key={el.id} />
							))
						)}
					</div>
				</div>
				<ContentCardDialog themeId={id} />
			</FormProvider>
		</section>
	)
}

export default Content
