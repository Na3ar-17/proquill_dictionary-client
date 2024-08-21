import { useTheme } from '@/api/hooks/useTheme'
import { ITheme } from '@/entities/theme.entity'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const useThemeCard = ({
	id,
	title,
}: {
	id: string
	title: string | null | undefined
}) => {
	const form = useForm<Pick<ITheme, 'title'>>({
		mode: 'onChange',
		defaultValues: {
			title,
		},
	})
	const [isRename, setIsRename] = useState<boolean>(false)

	const { useDeleteTheme, useUpdateTheme } = useTheme()

	const { loading, mutation } = useDeleteTheme()
	const { loading: updataThemeLoading, mutation: updateThemeMutation } =
		useUpdateTheme()

	const handleDelete = ({ ids }: { ids: string[] }) => {
		mutation({
			variables: { ids: ids },
		})
	}
	const onSubmit = (values: Pick<ITheme, 'title'>) => {
		updateThemeMutation({
			variables: { updateThemeInput: { id: id, title: values.title } },
			onCompleted: () => {
				setIsRename(false)
			},
		})
	}

	return {
		isRename,
		setIsRename,
		onSubmit,
		handleDelete,
		updataThemeLoading,
		form,
		loading,
	}
}
