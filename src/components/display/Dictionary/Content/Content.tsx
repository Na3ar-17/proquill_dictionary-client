'use client'
import { useTheme } from '@/api/hooks/useTheme'
import { Button } from '@/components/ui/button'
import ContentCardDialog from '@/components/ui/custom/content-card-dialog/ContentCardDialog'
import ErrorMessage from '@/components/ui/custom/error/error-message/ErrorMessage'
import Heading from '@/components/ui/custom/heading/Heading'
import { Skeleton } from '@/components/ui/skeleton'
import { PAGES_URL } from '@/config/pages-url.config'
import { BookA, BookmarkX, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
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
		handleDelete,
		methods,
		onOpen,
		idsState,
		setIdsState,
		loading,
		error,
	} = useContentLogic({ themeId: id })
	const { useGetTheme } = useTheme()
	const { data: theme, loading: themeLoading } = useGetTheme({ id })
	const [resetChecked, setResetChecked] = useState(false)
	return (
		<section className={styles.container}>
			<Heading text={themeLoading ? 'loading' : theme?.theme.title || ''} />
			<FormProvider {...methods}>
				<div className={styles.content}>
					<div className={styles.actions}>
						{idsState.length >= 1 && (
							<div className='flex items-center gap-2'>
								<p className='text-sm text-zinc-500'>
									Selected {idsState.length} from {data?.contents.length}
								</p>
								<Button
									variant={'ghost'}
									onClick={() => {
										setIdsState([])
										setResetChecked(true)
									}}
									className='h-0 px-3 py-5'
								>
									<BookmarkX className='size-5' />
								</Button>
								<Button variant={'ghost'} className='h-0 px-3 py-5'>
									<Trash2
										onClick={() => handleDelete({ ids: idsState })}
										className='size-5 text-destructive'
									/>
								</Button>
							</div>
						)}
						<Button variant={'outline'} className='p-0'>
							<Link
								className='flex px-4 py-2 items-center gap-2 w-full h-full'
								href={`${PAGES_URL.DICTIONARY}/${id}/studying`}
							>
								<p>Study</p>
								<BookA className='size-5' />
							</Link>
						</Button>
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
						{error && <ErrorMessage message={error.message} />}
						{loading
							? Array.from({ length: 15 }).map((_, i) => (
									<Skeleton key={i} className='h-[85px]' />
							  ))
							: data?.contents?.map(el => (
									<ContentCard
										setIdsState={setIdsState}
										handleDelete={handleDelete}
										data={el}
										resetChecked={resetChecked}
										key={el.id}
										setResetChecked={setResetChecked}
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
