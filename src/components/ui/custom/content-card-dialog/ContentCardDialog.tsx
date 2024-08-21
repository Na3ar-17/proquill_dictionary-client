'use client'
import { NextPage } from 'next'

import { Dialog, DialogContent } from '@/components/ui/dialog'
import { IContentForm } from '@/types/content-form.types'
import { useForm } from 'react-hook-form'
import { Button } from '../../button'
import { Form } from '../../form'

import { IContent } from '@/entities/content.entity'
import { IContetnDialog } from '@/types/content-dialog.types'
import { Dispatch, SetStateAction } from 'react'
import Fields from './FIelds/Fields'

interface IProps {
	dialog?: IContetnDialog
	setDialog?: Dispatch<SetStateAction<IContetnDialog>>
	onCreate?: ({
		createContentInput,
	}: {
		createContentInput: IContentForm
	}) => void
}

const ContentCardDialog: NextPage<IProps> = ({
	dialog,
	setDialog,
	onCreate,
}) => {
	const form = useForm<IContentForm>({
		mode: 'onChange',
	})

	const onSubmit = (data: IContentForm) => {
		if (!!onCreate) {
			if (dialog?.contentCardId) {
			}

			// console.log(data)

			onCreate({ createContentInput: data })
		}
	}

	return (
		<Dialog
			open={dialog?.isOpen}
			onOpenChange={() => {
				if (!!setDialog) {
					setDialog(prev => {
						return {
							...prev,
							isOpen: false,
						}
					})
				}
			}}
		>
			<DialogContent className='min-w-[70%]'>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-4'
					>
						<Fields control={form.control} />
						<div className='flex justify-end items-center'>
							<Button type='submit' variant={'secondary'}>
								{dialog?.contentCardId ? 'Save' : 'Create'}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ContentCardDialog
