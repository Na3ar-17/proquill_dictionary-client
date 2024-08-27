'use client'
import { useContent } from '@/api/hooks/useContent'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { IContentForm } from '@/types/content-form.types'
import { Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
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
	const [idsState, setIdsState] = useState<string[]>([])

	const { useGetContent, useCreateContent, useDeleteContent } = useContent()
	const { data, error, loading } = useGetContent({ themeId: id })
	const {
		error: deleteError,
		loading: deleteLoading,
		data: deletedData,
		mutation,
	} = useDeleteContent()

	const handleDelete = ({ ids }: { ids: string[] }) => {
		mutation({
			variables: { ids, themeId: id },
			onCompleted: ({ deleteOneOrMoreContent }) => {
				setIdsState([])
				toast.success('Successfully deleted')
			},
		})
	}

	return (
		<section className={styles.container}>
			<Heading text={'Add Title'} />
			<FormProvider {...methods}>
				<div className={styles.content}>
					<div className={styles.actions}>
						{idsState.length >= 1 && (
							<div className='flex items-center gap-3'>
								<p className='text-sm text-zinc-500'>
									Selected {idsState.length} from {data?.getAllContent.length}
								</p>
								<Button variant={'ghost'} className='h-0 px-3 py-5'>
									<Trash2
										onClick={() => handleDelete({ ids: idsState })}
										className='size-5 text-destructive'
									/>
								</Button>
							</div>
						)}

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
								<ContentCard
									setIdsState={setIdsState}
									handleDelete={handleDelete}
									data={el}
									key={el.id}
								/>
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
