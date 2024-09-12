import { useContent } from '@/api/hooks/useContent'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { IContentForm } from '@/types/content-form.types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IProps {
	themeId: string
}

export const useContentLogic = ({ themeId }: IProps) => {
	const methods = useForm<IContentForm>()
	const { onOpen } = useContentCardDialogStore()
	const [idsState, setIdsState] = useState<string[]>([])
	const { useGetContent, useDeleteManyContent, useDeleteOneContent } =
		useContent()
	const { data, error, loading } = useGetContent({
		themeId,
	})
	const { mutation } = useDeleteManyContent({ themeId })
	const { deleteOneContentMutation } = useDeleteOneContent()

	const handleDelete = ({ ids }: { ids: string[] }) => {
		if (ids.length == 1) {
			deleteOneContentMutation({
				variables: { id: ids[0], themeId },
				onCompleted: ({ delete_content }) => {
					if (idsState.includes(delete_content?.id)) {
						setIdsState(prev => prev.filter(el => el !== delete_content.id))
					}
					toast.success('Successfully deleted')
				},
			})
		} else {
			mutation({
				variables: { ids, themeId },
				onCompleted: () => {
					setIdsState([])
					toast.success('Successfully deleted')
				},
			})
		}
	}
	return {
		methods,
		handleDelete,
		onOpen,
		data,
		error,
		loading,
		idsState,
		setIdsState,
	}
}
