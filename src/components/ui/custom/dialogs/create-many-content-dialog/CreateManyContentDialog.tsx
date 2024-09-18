import { useContent } from '@/api/hooks/useContent'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { CreateContentManyDataInput } from '@/gql/graphql'
import { ICreateManyContentDialogForm } from '@/types/content-dialog.types'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import CodeExample from './code-example/CodeExample'
import { useValidateJson } from './useValidateJson'

interface IProps {
	isOpen: boolean
	onClose: () => void
	themeId: string
}

const CreateManyContentDialog: NextPage<IProps> = ({
	isOpen,
	onClose,
	themeId,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm<ICreateManyContentDialogForm>({
		mode: 'onChange',
	})
	const { validate } = useValidateJson({ setError })
	const { useCreateManyContent } = useContent()
	const [mutation, { loading }] = useCreateManyContent({ themeId })

	const onSubmit = (data: ICreateManyContentDialogForm) => {
		const parsedData: CreateContentManyDataInput[] = JSON.parse(data.jsonData)

		mutation({
			variables: {
				createManyContentDto: {
					themeId,
					data: parsedData,
				},
			},
			onCompleted: () => {
				onClose()
				reset()
			},
		})
	}

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogTitle>Create Many Content</DialogTitle>
				<DialogDescription>
					<div>
						<p className='mb-2'>
							To create many content you need to paste here json data
						</p>
						<CodeExample />
					</div>
					<form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
						<Textarea
							{...register('jsonData', {
								required: {
									value: true,
									message: 'This is required field',
								},
								validate: validate,
							})}
							placeholder='Your json here'
							className='h-fit resize-y min-h-[300px] max-h-[520px]'
							spellCheck={false}
						/>
						{errors.jsonData && (
							<p className='text-red-500 mt-2 text-sm'>
								{errors.jsonData.message}
							</p>
						)}
						<Button disabled={loading} className='mt-3'>
							Submit
						</Button>
					</form>
				</DialogDescription>
			</DialogContent>
		</Dialog>
	)
}

export default CreateManyContentDialog
