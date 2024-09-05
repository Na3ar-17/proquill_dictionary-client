'use client'
import { useStudy } from '@/api/hooks/useStudy'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StudyingResultChart } from '@/components/ui/custom/charts/StudyingResultChart/StudyingResultChart'
import StudyingRadio from '@/components/ui/custom/radios/studying-radio/LearningRadio'
import { Form, FormField } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import styles from './Studying.module.scss'
interface IProps {
	id: string
}

const Studying: NextPage<IProps> = ({ id }) => {
	const { useGetForSelectTrueTranslation, useValidateSelectedTranslation } =
		useStudy()
	const { data, loading, error, refetch } = useGetForSelectTrueTranslation({
		themeId: id,
	})
	const {
		mutation,
		validateSelectedTranslationData,
		validateSelectedTranslationLoading,
	} = useValidateSelectedTranslation()
	const form = useForm<Pick<IContentForm, 'translation'>>({
		mode: 'onChange',
	})

	const onSubmit = (formData: Pick<IContentForm, 'translation'>) => {
		if (data?.selectTrueTranslation) {
			mutation({
				variables: {
					dto: {
						themeId: id,
						currentSentenceId: data?.selectTrueTranslation.id,
						translation: formData.translation,
					},
				},
				onCompleted: ({ validateSelectedTranslation }) => {
					form.reset()
				},
				refetchQueries: () => ['GetForSelectTrueTranslation'],
			})
		}
	}

	const isEnded = data?.selectTrueTranslation?.itemsLeft == 0

	return (
		<section className='flex justify-center items-center min-h-[95vh]'>
			<Card className='w-[80%] relative overflow-hidden'>
				<CardHeader>
					<CardTitle className='text-muted-foreground text-base font-normal'>
						{!isEnded && 'Choose correct translation'}
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-12 mt-5 px-12'>
					<div className='text-lg text-left text-white'>
						{error && <span>{error.message}</span>}
						{loading ? (
							<Skeleton className='h-8' />
						) : (
							htmlCleaner(data?.selectTrueTranslation.sentence || '')
						)}
					</div>
					{isEnded ? (
						<div>
							<p className='text-2xl font-semibold'>Result</p>
							<StudyingResultChart
								chartText='Correct answers'
								correctAnswersPercent={50}
							/>
						</div>
					) : (
						<Form {...form}>
							<form
								className='flex flex-col gap-1'
								onSubmit={form.handleSubmit(onSubmit)}
							>
								{error && <p>{error.message}</p>}
								{loading
									? Array.from({ length: 3 }).map((el, i) => (
											<Skeleton className='h-[42px] mt-2 last:mt-0' key={i} />
									  ))
									: data?.selectTrueTranslation.variations.map((el, i) => (
											<FormField
												key={i}
												control={form.control}
												name='translation'
												render={({ field: { onChange, value } }) => (
													<StudyingRadio
														onChange={() => onChange(el.translation)}
														text={htmlCleaner(el.translation)}
														value={el.translation}
														selectedValue={value}
													/>
												)}
												rules={{
													required: {
														value: true,
														message: 'You have to choose the correct answer',
													},
												}}
											/>
									  ))}
								<div className='mt-3'>
									{!isEnded && (
										<Button
											disabled={
												!form.formState.isValid ||
												loading ||
												validateSelectedTranslationLoading
											}
										>
											Submit
										</Button>
									)}
								</div>
							</form>
						</Form>
					)}
				</CardContent>
				<div className={styles.indicator}></div>
			</Card>
		</section>
	)
}

export default Studying
