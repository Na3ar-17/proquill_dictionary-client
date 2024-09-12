import { useTheme } from '@/api/hooks/useTheme'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import { Form } from '@/components/ui/form'
import { PAGES_URL } from '@/config/pages-url.config'
import { Theme } from '@/gql/graphql'
import { dateFormatter } from '@/utils/dateFormatter'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Content from './CardContent/Content'
import FormComponent from './Form/FormComponent'

interface IProps {
	data: Theme
}

const ThemeCard: NextPage<IProps> = ({
	data: { createdAt, title, id, learningProgress },
}) => {
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
		mutation({
			variables: { ids },
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
				<Card className='grid hover:bg-muted transition-colors px-2 overflow-hidden relative grid-cols-2 items-center'>
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
