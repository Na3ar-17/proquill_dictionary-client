'use client'
import { useContent } from '@/api/hooks/useContent'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { IContetnDialog } from '@/types/content-dialog.types'
import { IContentForm } from '@/types/content-form.types'
import { NextPage } from 'next'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../button'
import { Form } from '../../form'
import Fields from './FIelds/Fields'

interface IProps {
	dialog?: IContetnDialog
	setDialog?: Dispatch<SetStateAction<IContetnDialog>>
	onCreate?: ({
		createContentInput,
	}: {
		createContentInput: IContentForm
	}) => void
	themeId?: string
}

const ContentCardDialog: NextPage<IProps> = ({
	dialog,
	setDialog,
	onCreate,
	themeId,
}) => {
	const { useGetOneContent } = useContent()

	const { oneContentData, oneContentError, oneContentLoading, refetch } =
		useGetOneContent({
			themeId: themeId || '',
			id: dialog?.contentCardId || '',
		})

	const form = useForm<IContentForm>({
		mode: 'onChange',
		defaultValues: {
			...oneContentData?.getOneContent,
		},
	})

	const onSubmit = (data: IContentForm) => {
		if (dialog?.contentCardId) {
		}

		if (!!onCreate) {
			onCreate({ createContentInput: data })
		}
	}

	useEffect(() => {
		if (oneContentData && form.formState.isDirty) {
			refetch()
		}

		//FIXME
	}, [oneContentData, form.formState.isDirty])

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
				{oneContentLoading ? (
					<div>Loading</div>
				) : (
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
				)}
			</DialogContent>
		</Dialog>
	)
}

export default ContentCardDialog
