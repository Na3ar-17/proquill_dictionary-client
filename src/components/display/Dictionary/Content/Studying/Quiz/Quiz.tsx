'use client'
import { useQuiz } from '@/api/hooks/useQuiz'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { QuizzResultChart } from '@/components/ui/custom/charts/QuizzResultChart/QuizzResultChart'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import FormComponent from './FormComponent'
import styles from './Quiz.module.scss'
interface IProps {
	id: string
}

const Quiz: NextPage<IProps> = ({ id }) => {
	const { useGetVariations, useGetResult } = useQuiz()
	const { data, error, loading, refetch } = useGetVariations({ themeId: id })
	const { result, resultError, resultLoading } = useGetResult({ themeId: id })

	const onSubmit = (formData: Pick<IContentForm, 'translation'>) => {}
	const isEnded = data?.variations.itemsLeft === 0
	return (
		<section className='flex justify-center items-center min-h-[95vh]'>
			<Card
				className={cn('w-[80%] relative overflow-hidden p-3', {
					['w-[60%]']: isEnded,
				})}
			>
				<CardHeader className='p-0'>
					<CardTitle>
						{isEnded ? (
							<p className='text-xl font-semibold'>Result</p>
						) : (
							<p className='text-muted-foreground text-base font-normal'>
								Choose correct translation
							</p>
						)}
					</CardTitle>
				</CardHeader>
				<CardContent
					className={cn('flex flex-col gap-12 mt-5 px-12', {
						['justify-center items-center m-0 p-0']: isEnded,
					})}
				>
					<div className='text-lg text-left text-white'>
						{loading ? <Skeleton className='h-8' /> : htmlCleaner('')}
					</div>
					{isEnded ? (
						<div>
							<QuizzResultChart
								chartText='Correct answers'
								correctAnswersPercent={result?.result.correctAnswers || 0}
							/>
						</div>
					) : (
						<FormComponent
							isEnded={isEnded}
							loading={loading}
							onSubmit={onSubmit}
							variations={data?.variations.variations}
						/>
					)}
				</CardContent>
				<div className={styles.indicator}></div>
			</Card>
		</section>
	)
}

export default Quiz
