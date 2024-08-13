'use client'
import { NextPage } from 'next'

import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { IContentForm } from '@/types/content-form.types'
import { useForm } from 'react-hook-form'
import { Button } from '../../button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../form'

import { useContentCardDialog } from '@/store/content-card-dialog.store'
import Fields from './FIelds/Fields'

interface IProps {}

const ContentCardDialog: NextPage<IProps> = () => {
	const form = useForm<IContentForm>({
		mode: 'onChange',
	})

	const { onClose, isDialogOpen, id } = useContentCardDialog()

	const onSubmit = (data: IContentForm) => {
		console.log(data)
	}

	return (
		<Dialog open={isDialogOpen} onOpenChange={onClose}>
			<DialogContent className='min-w-[70%]'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-4'
					>
						<Fields control={form.control} />
						<div className='flex justify-end items-center'>
							<Button type='submit' variant={'secondary'}>
								{id ? 'Save' : 'Create'}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ContentCardDialog
