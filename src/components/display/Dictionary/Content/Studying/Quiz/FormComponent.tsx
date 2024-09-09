import { Button } from '@/components/ui/button'
import StudyingRadio from '@/components/ui/custom/radios/studying-radio/LearningRadio'
import { Form, FormField } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { Variations } from '@/gql/graphql'
import { IContentForm } from '@/types/content-form.types'
import { htmlCleaner } from '@/utils/htmlCleaner'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

interface IProps {
	onSubmit: (formData: Pick<IContentForm, 'translation'>) => void
	loading: boolean
	variations: Variations[] | undefined
	isEnded: boolean
}

const FormComponent: NextPage<IProps> = ({
	onSubmit,
	loading,
	variations,
	isEnded,
}) => {
	const form = useForm<Pick<IContentForm, 'translation'>>({
		mode: 'onChange',
	})
	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-1'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				{loading
					? Array.from({ length: 3 }).map((el, i) => (
							<Skeleton className='h-[42px] mt-2 last:mt-0' key={i} />
					  ))
					: variations?.map((el, i) => (
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
						<Button disabled={!form.formState.isValid || loading}>
							Submit
						</Button>
					)}
				</div>
			</form>
		</Form>
	)
}

export default FormComponent
