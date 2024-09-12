'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ErrorMessage from '@/components/ui/custom/error/error-message/ErrorMessage'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import FormComponent from './FormComponent'
import Indicator from './indicator/Indicator'
import Result from './Result'
import { useQuizLogic } from './useQuizLogic'
interface IProps {
	id: string
}

const Quiz: NextPage<IProps> = ({ id }) => {
	const form = useForm<Pick<IContentForm, 'translation'>>({
		mode: 'onChange',
	})
	const {
		isEnded,
		data,
		handleRestart,
		loading,
		onSubmit,
		result,
		resultLoading,
		validateData,
		error,
		handleValidate,
	} = useQuizLogic({ form, themeId: id })
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
						['justify-center items-center m-0 p-0 gap-0 mb-3']: isEnded,
					})}
				>
					<div className='text-lg text-left text-white'>
						{loading ? (
							<Skeleton className='h-8' />
						) : (
							htmlCleaner(data?.variations.sentence || '')
						)}
					</div>
					{error && <ErrorMessage message={error.message} />}
					{isEnded ? (
						<Result
							correctAnswers={result?.result.correctAnswers || 0}
							handleRestart={handleRestart}
							resultLoading={resultLoading}
						/>
					) : (
						<FormComponent
							isEnded={isEnded}
							isButtonDisabled={
								!validateData?.validate ||
								form.formState.isSubmitting ||
								form.formState.isSubmitted
							}
							loading={loading}
							onSubmit={onSubmit}
							data={data?.variations}
							handleValidate={handleValidate}
							validateData={validateData}
							form={form}
						/>
					)}
				</CardContent>
				<Indicator data={data} />
			</Card>
		</section>
	)
}

export default Quiz
