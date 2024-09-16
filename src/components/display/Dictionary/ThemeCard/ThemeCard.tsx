import { useTheme } from '@/api/hooks/useTheme'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { Form } from '@/components/ui/form'
import { PAGES_URL } from '@/config/pages-url.config'
import { Theme } from '@/gql/graphql'
import { dateFormatter } from '@/utils/dateFormatter'
import { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Content from './CardContent/Content'
import FormComponent from './Form/FormComponent'

interface IProps {
	data: Theme
	setThemes: Dispatch<SetStateAction<Theme[] | undefined>>
}

const ThemeCard: NextPage<IProps> = ({ setThemes, data }) => {
	const { createdAt, title, id, learningProgress } = data
	const form = useForm<Pick<Theme, 'title'>>({
		mode: 'onChange',
		values: { title },
	})
	const [isRename, setIsRename] = useState<boolean>(false)
	const { useDeleteTheme, useUpdateTheme } = useTheme()
	const { loading, mutation } = useDeleteTheme()
	const { loading: updataThemeLoading, mutation: updateThemeMutation } =
		useUpdateTheme()
	const handleDelete = ({ ids }: { ids: string[] }) => {
		setThemes(prev => {
			if (!prev) return prev
			return prev.filter(el => !ids.includes(el.id))
		})
		mutation({
			variables: { ids },
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}
	const onSubmit = (values: Pick<Theme, 'title'>) => {
		updateThemeMutation({
			variables: { updateThemeDto: { id, title: values.title } },
			onCompleted: () => {
				setIsRename(false)
			},
		})
	}

	return (
		<BaseContextMenu
			isRename
			onRename={() => setIsRename(!isRename)}
			onDelete={() => handleDelete({ ids: [id] })}
		>
			{loading ? (
				<div className='h-[52px] bg-card'></div>
			) : (
				<Card className='grid px-2 hover:bg-muted-foreground/5 transition-colors duration-500 overflow-hidden relative grid-cols-2 items-center'>
					<CardHeader>
						<CardTitle>
							{isRename ? (
								<Form {...form}>
									<FormComponent
										buttonDisabled={updataThemeLoading}
										form={form}
										onSubmit={form.handleSubmit(onSubmit)}
									/>
								</Form>
							) : (
								<Link
									href={`${PAGES_URL.DICTIONARY}/${id}`}
									className='cursor-pointer hover:underline'
								>
									{title}
								</Link>
							)}
						</CardTitle>
						{!isRename && (
							<p className='text-sm text-zinc-500'>
								{dateFormatter(createdAt)}
							</p>
						)}
					</CardHeader>
					<Content
						themeId={id}
						wordsLearned={learningProgress?.wordsLearned || 0}
					/>
				</Card>
			)}
		</BaseContextMenu>
	)
}

export default ThemeCard
