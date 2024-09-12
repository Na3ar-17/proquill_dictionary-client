import { Button } from '@/components/ui/button'
import TransparentField from '@/components/ui/custom/fields/transparent-field/TransparentField'
import { FormField } from '@/components/ui/form'
import { Theme } from '@/gql/graphql'
import { NextPage } from 'next'
import { UseFormReturn } from 'react-hook-form'

interface IProps {
	form: UseFormReturn<Pick<Theme, 'title'>, any, undefined>
	onSubmit: () => void
	buttonDisabled: boolean
}

const FormComponent: NextPage<IProps> = ({
	form,
	onSubmit,
	buttonDisabled,
}) => {
	return (
		<form onSubmit={onSubmit} className='flex items-center gap-4 mb-2'>
			<div>
				<FormField
					control={form.control}
					name='title'
					render={({ field: { value, onChange } }) => (
						<TransparentField value={value || ''} onChange={onChange} />
					)}
					rules={{
						required: {
							value: true,
							message: 'This is required field',
						},
						minLength: {
							value: 3,
							message: 'At least 3 characters',
						},
					}}
				/>
				{form.formState.errors.title && (
					<p className='text-red-500 text-sm absolute'>
						{form.formState.errors.title.message}
					</p>
				)}
			</div>
			<Button disabled={buttonDisabled} variant={'default'}>
				Save
			</Button>
		</form>
	)
}

export default FormComponent
