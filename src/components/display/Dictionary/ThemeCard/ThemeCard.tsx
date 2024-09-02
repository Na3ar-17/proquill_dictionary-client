import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import BaseContextMenu from '@/components/ui/custom/context-menus/BaseContextMenu'
import TransparentField from '@/components/ui/custom/fields/transparent-field/TransparentField'
import { Form, FormField } from '@/components/ui/form'
import { PAGES_URL } from '@/config/pages-url.config'
import { ITheme } from '@/entities/theme.entity'
import { dateFormatter } from '@/utils/dateFormatter'
import { NextPage } from 'next'
import Link from 'next/link'
import Content from './CardContent/Content'
import { useThemeCard } from './useThemeCard'

interface IProps {
	data: ITheme
}

const ThemeCard: NextPage<IProps> = ({
	data: { createdAt, title, id, learningProgress },
}) => {
	const {
		form,
		handleDelete,
		isRename,
		onSubmit,
		setIsRename,
		updataThemeLoading,
		loading,
	} = useThemeCard({ id, title })

	return (
		<BaseContextMenu
			isRename
			onRename={() => setIsRename(!isRename)}
			onDelete={() => handleDelete({ ids: [id] })}
		>
			{loading ? (
				<div className='h-[52px] bg-card'></div>
			) : (
				<Card className='grid hover:bg-muted transition-colors px-2 overflow-hidden relative grid-cols-[300px_1fr] items-center'>
					<CardHeader>
						<CardTitle>
							{isRename ? (
								<Form {...form}>
									<form
										onSubmit={form.handleSubmit(onSubmit)}
										className='flex items-center gap-4'
									>
										<FormField
											control={form.control}
											name='title'
											render={({ field: { value, onChange } }) => (
												<TransparentField
													value={value || ''}
													onChange={onChange}
												/>
											)}
										/>

										<Button disabled={updataThemeLoading} variant={'default'}>
											Save
										</Button>
									</form>
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
