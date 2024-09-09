'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StudyingResultChart } from '@/components/ui/custom/charts/StudyingResultChart/StudyingResultChart'
import { Form } from '@/components/ui/form'
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
	const form = useForm<Pick<IContentForm, 'translation'>>({
		mode: 'onChange',
	})

	const onSubmit = (formData: Pick<IContentForm, 'translation'>) => {}
	const isEnded = false
	const loading = false
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
						{loading ? <Skeleton className='h-8' /> : htmlCleaner('')}
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
								{/* {loading
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
									  ))} */}
								<div className='mt-3'>
									{!isEnded && (
										<Button disabled={!form.formState.isValid || loading}>
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
