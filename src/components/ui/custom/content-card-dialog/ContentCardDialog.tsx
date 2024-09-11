'use client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from '@/components/ui/dialog'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { NextPage } from 'next'
import { useEffect, useLayoutEffect } from 'react'
import { Button } from '../../button'
import { Form } from '../../form'
import Fields from './FIelds/Fields'
import { useContentDialog } from './useContentDialog'

interface IProps {
	themeId?: string
}
const ContentCardDialog: NextPage<IProps> = ({ themeId }) => {
	const {
		currentData,
		onSubmit,
		prevData,
		existsId,
		form,
		isFormInitialized,
		setIsFormInitialized,
		loading,
	} = useContentDialog({
		themeId: themeId || '',
	})
	const { onClose, isOpen } = useContentCardDialogStore()
	useLayoutEffect(() => {
		if (existsId) {
			if (currentData) {
				form.reset({
					sentence: currentData.sentence,
					transcription: currentData.transcription,
					translation: currentData.translation,
					themeId: currentData.themeId,
					id: currentData.id,
				})
			}
			if (currentData?.id !== prevData?.id) {
				setIsFormInitialized(false)
			}

			if (currentData?.id === form.getValues().id) {
				setIsFormInitialized(true)
			}
		}
	}, [currentData, prevData])

	useEffect(() => {
		if (existsId) {
			if (currentData) {
				form.reset({
					sentence: currentData.sentence,
					transcription: currentData.transcription,
					translation: currentData.translation,
					themeId: currentData.themeId,
					id: currentData.id,
				})
			}
			if (currentData?.id !== prevData?.id) {
				setIsFormInitialized(false)
			}

			if (currentData?.id === form.getValues().id) {
				setIsFormInitialized(true)
			}
		}
	}, [currentData, prevData])

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='min-w-[70%] z-[200]'>
				<DialogTitle></DialogTitle>
				<DialogDescription></DialogDescription>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col gap-4'
					>
						<Fields
							isLoading={loading || (!isFormInitialized && !!existsId)}
							control={form.control}
						/>
						<div className='flex justify-end items-center'>
							<Button type='submit' variant={'secondary'}>
								{existsId ? 'Save' : 'Create'}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ContentCardDialog
