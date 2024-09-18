'use client'
import { useTheme } from '@/api/hooks/useTheme'
import ContentCardDialog from '@/components/ui/custom/dialogs/content-card-dialog/ContentCardDialog'
import CreateManyContentDialog from '@/components/ui/custom/dialogs/create-many-content-dialog/CreateManyContentDialog'
import EmptyMessage from '@/components/ui/custom/empty-message/EmptyMessage'
import ErrorMessage from '@/components/ui/custom/error/error-message/ErrorMessage'
import Heading from '@/components/ui/custom/heading/Heading'
import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'
import { useState } from 'react'
import { FormProvider } from 'react-hook-form'
import Actions from './Actions'
import styles from './Content.module.scss'
import ContentCard from './ContentCard/ContentCard'
import { useContentLogic } from './useContentLogic'

interface IProps {
	id: string
}

const Content: NextPage<IProps> = ({ id }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const { data, handleDelete, methods, idsState, setIdsState, loading, error } =
		useContentLogic({ themeId: id })
	const { useGetTheme } = useTheme()
	const { data: theme, loading: themeLoading } = useGetTheme({ id })
	const [resetChecked, setResetChecked] = useState(false)
	const contentsLength = data?.contents.length || 0
	return (
		<section className={styles.container}>
			<Heading text={themeLoading ? 'loading' : theme?.theme.title || ''} />
			<FormProvider {...methods}>
				<div className={styles.content}>
					<Actions
						contentsLength={contentsLength}
						methods={methods}
						themeId={id}
						idsState={idsState}
						setIdsState={setIdsState}
						setResetChecked={setResetChecked}
						handleDelete={handleDelete}
						onCreateManyContentDialogOpen={() => setIsOpen(true)}
					/>
					<div className={styles.sentences}>
						{error && <ErrorMessage message={error.message} />}
						{loading ? (
							Array.from({ length: 15 }).map((_, i) => (
								<Skeleton key={i} className='h-[85px]' />
							))
						) : contentsLength === 0 ? (
							<EmptyMessage message='You dont have any content yet!' />
						) : (
							data?.contents?.map(el => (
								<ContentCard
									setIdsState={setIdsState}
									handleDelete={handleDelete}
									data={el}
									resetChecked={resetChecked}
									key={el.id}
									setResetChecked={setResetChecked}
								/>
							))
						)}
					</div>
				</div>
				<ContentCardDialog themeId={id} />
				<CreateManyContentDialog
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					themeId={id}
				/>
			</FormProvider>
		</section>
	)
}

export default Content
