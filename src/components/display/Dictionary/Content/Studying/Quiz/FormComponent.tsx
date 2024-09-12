import { Button } from '@/components/ui/button'
import LearningRadio from '@/components/ui/custom/radios/learning-radio/LearningRadio'
import { Form, FormField } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { QuizSession, ValidateMutation, ValidateQuizDto } from '@/gql/graphql'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import { UseFormReturn } from 'react-hook-form'

interface IProps {
	onSubmit: () => void
	loading: boolean
	data: QuizSession | undefined
	isEnded: boolean
	isButtonDisabled: boolean
	handleValidate: (dto: ValidateQuizDto) => void
	validateData: ValidateMutation | null | undefined
	form: UseFormReturn<Pick<IContentForm, 'translation'>, any, undefined>
}

const FormComponent: NextPage<IProps> = props => {
	return (
		<Form {...props.form}>
			<form
				className='flex flex-col gap-2'
				onSubmit={props.form.handleSubmit(props.onSubmit)}
			>
				{props.loading
					? Array.from({ length: 3 }).map((el, i) => (
							<Skeleton className='h-[46px] mt-2 last:mt-0' key={i} />
					  ))
					: props.data?.variations?.map((el, i) => (
							<FormField
								key={i}
								control={props.form.control}
								name='translation'
								render={({
									field: { onChange, value },
									fieldState: { isDirty },
									formState: { isSubmitting, isSubmitted },
								}) => (
									<LearningRadio
										onChange={() => {
											props.handleValidate({
												contentId: props.data?.contentId || '',
												translation: el.translation,
												themeId: props.data?.themeId || '',
											})
											onChange(el.translation)
										}}
										text={htmlCleaner(el.translation)}
										value={el.translation}
										selectedValue={value}
										disabled={isDirty || isSubmitting || isSubmitted}
										isCorrect={
											props.validateData?.validate.correctTranslation ===
											el.translation
										}
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
					{!props.isEnded && (
						<Button
							disabled={
								!props.form.formState.isValid ||
								props.loading ||
								props.isButtonDisabled
							}
							type='submit'
						>
							Next
						</Button>
					)}
				</div>
			</form>
		</Form>
	)
}

export default FormComponent
