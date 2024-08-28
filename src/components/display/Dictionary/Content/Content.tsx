'use client'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import Heading from '@/components/ui/custom/heading/Heading'
import { Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { FormProvider } from 'react-hook-form'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'
import { useContentLogic } from './useContentLogic'

interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	const {
		data,
		error,
		handleDelete,
		loading,
		methods,
		onOpen,
		idsState,
		setIdsState,
	} = useContentLogic({ themeId: id })

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
						{error && <div>{error.message}</div>}
						{loading && <div>Loading...</div>}

						{data?.getAllContent?.map(el => (
							<ContentCard
								setIdsState={setIdsState}
								handleDelete={handleDelete}
								data={el}
								key={el.id}
							/>
						))}
					</div>
				</div>
				<ContentCardDialog themeId={id} />
			</FormProvider>
		</section>
	)
}

export default Content
