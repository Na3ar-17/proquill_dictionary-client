'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LearningRadio from '@/components/ui/custom/radios/learning-radio/LearningRadio'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { IContent } from '@/entities/content.entity'
import { IContentForm } from '@/types/content-form.types'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

interface IProps {
	id: string
}

const Learning: NextPage<IProps> = ({ id }) => {
	const form = useForm<Pick<IContentForm, 'translation'>>({})

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
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
							quam!
						</p>
					</div>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='translation'
								render={({ field }) => (
									<FormItem className='space-y-3'>
										<FormControl>
											<RadioGroup
												onValueChange={field.onChange}
												defaultValue={field.value}
												className='flex flex-col space-y-1'
											>
												<FormItem className='flex items-center space-x-3 space-y-0'>
													<FormControl>
														<RadioGroupItem value='' />
													</FormControl>
													<FormLabel className='font-normal'></FormLabel>
												</FormItem>
											</RadioGroup>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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

export default Learning
