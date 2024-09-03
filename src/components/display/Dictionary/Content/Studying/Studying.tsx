'use client'
import { useStudy } from '@/api/hooks/useStudy'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LearningRadio from '@/components/ui/custom/radios/learning-radio/LearningRadio'
import { Form, FormField } from '@/components/ui/form'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

interface IProps {
	id: string
}

const Studying: NextPage<IProps> = ({ id }) => {
	const { useGetForSelectTrueTranslation } = useStudy()
	const { data, loading, error } = useGetForSelectTrueTranslation({
		themeId: id,
	})
	const form = useForm<Pick<IContentForm, 'translation'>>({
		mode: 'onChange',
	})

	const onSubmit = (values: Pick<IContentForm, 'translation'>) => {
		console.log(values)
	}

	return (
		<section className='flex justify-center items-center min-h-[95vh]'>
			<Card className='w-[80%]'>
				<CardHeader>
					<CardTitle className='text-muted-foreground text-lg'>
						Choose correct translation
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col gap-12 mt-5 px-12'>
					<div className='text-center'>
						<p className='text-lg'>
							{error && <span>{error.message}</span>}
							{loading && <span>Loading</span>}
							{htmlCleaner(data?.selectTrueTranslation.sentence || '')}
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							{error && <p>{error.message}</p>}
							{loading && <p>Loading</p>}
							{data?.selectTrueTranslation.variations.map((el, i) => (
								<FormField
									key={i}
									control={form.control}
									name='translation'
									render={({ field: { onChange, value } }) => (
										<LearningRadio
											onChange={() => onChange(el.translation)}
											text={htmlCleaner(el.translation)}
											value={el.translation}
											selectedValue={value}
										/>
									)}
								/>
							))}
							<div className='flex flex-col gap-3'>
								<div>
									<Button>Submit</Button>
								</div>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</section>
	)
}

export default Studying
