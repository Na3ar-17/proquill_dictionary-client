import { useContent } from '@/api/hooks/useContent'
import { GET_CONTENT_QUERY } from '@/api/queries/content.queries'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { IContentForm } from '@/types/content-form.types'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IProps {
	themeId: string
}

export const useContentDialog = ({ themeId }: IProps) => {
	const form = useFormContext<IContentForm>()
	const { onClose } = useContentCardDialogStore()
	const [isFormInitialized, setIsFormInitialized] = useState<boolean>(false)
	const existsId = form.watch('id')

	const { useGetOneContent, useCreateContent, useUpdateContent } = useContent()
	const { data, loading, previousData } = useGetOneContent({
		themeId: themeId || '',
		id: existsId,
	})

	const [mutation] = useCreateContent()
	const { '0': updateMutation } = useUpdateContent()
	const currentData = data?.getOneContent
	const prevData = previousData?.getOneContent

	const onSubmit = (data: IContentForm) => {
		const { id, ...rest } = data
		if (existsId) {
			updateMutation({
				variables: {
					updateContentInput: {
						...data,
						id: existsId,
					},
				},
				onCompleted: () => {
					toast.success('Successfully updated content')
					onClose()
				},
				onError: ({ message }) => {
					toast.error(message)
				},
				refetchQueries: [GET_CONTENT_QUERY],
			})
		} else {
			mutation({
				variables: {
					createContentInput: {
						...rest,
						themeId: themeId || '',
					},
				},
				onCompleted: () => {
					form.reset()
					onClose()
				},
				refetchQueries: [GET_CONTENT_QUERY],
			})
		}
	}
	return {
		onSubmit,
		prevData,
		currentData,
		existsId,
		form,
		isFormInitialized,
		setIsFormInitialized,
		loading,
	}
}
