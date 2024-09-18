import { Button } from '@/components/ui/button'
import TooltipComponent from '@/components/ui/custom/tooltip-component/TooltipComponent'
import { PAGES_URL } from '@/config/pages-url.config'
import { useContentCardDialogStore } from '@/store/content-dialog.store'
import { IContentForm } from '@/types/content-form.types'
import { BookA, BookmarkX, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import styles from './Content.module.scss'
interface IProps {
	idsState: string[]
	contentsLength: number
	themeId: string
	methods: UseFormReturn<IContentForm, any, undefined>
	setIdsState: Dispatch<SetStateAction<string[]>>
	setResetChecked: Dispatch<SetStateAction<boolean>>
	handleDelete: ({ ids }: { ids: string[] }) => void
	onCreateManyContentDialogOpen: () => void
}
const Actions: NextPage<IProps> = props => {
	const {
		handleDelete,
		idsState,
		contentsLength,
		themeId,
		methods,
		setIdsState,
		setResetChecked,
		onCreateManyContentDialogOpen,
	} = props
	const { onOpen } = useContentCardDialogStore()
	return (
		<div className={styles.actions}>
			{idsState.length >= 1 && (
				<div className='flex items-center gap-2'>
					<p className='text-sm text-zinc-500'>
						Selected {idsState.length} from {contentsLength}
					</p>
					<Button
						variant={'ghost'}
						onClick={() => {
							setIdsState([])
							setResetChecked(true)
						}}
						className='h-0 px-3 py-5'
					>
						<BookmarkX className='size-5' />
					</Button>
					<Button variant={'ghost'} className='h-0 px-3 py-5'>
						<Trash2
							onClick={() => handleDelete({ ids: idsState })}
							className='size-5 text-destructive'
						/>
					</Button>
				</div>
			)}
			{contentsLength < 10 ? (
				<TooltipComponent
					label={'This theme must include at least 10 contents'}
				>
					<div className='cursor-not-allowed opacity-50 flex px-4 py-2 items-center gap-2 w-full h-full'>
						<p>Study</p>
						<BookA className='size-5' />
					</div>
				</TooltipComponent>
			) : (
				<Link
					className='flex px-4 py-2 items-center gap-2 w-full h-full'
					href={`${PAGES_URL.DICTIONARY}/${themeId}/studying`}
				>
					<p>Study</p>
					<BookA className='size-5' />
				</Link>
			)}
			<div className='flex items-center gap-3'>
				<Button onClick={onCreateManyContentDialogOpen} variant={'secondary'}>
					Create many
				</Button>
				<Button
					onClick={() => {
						methods.reset({
							sentence: '',
							id: '',
							themeId: '',
							transcription: '',
							translation: '',
						})
						onOpen()
					}}
					variant={'default'}
				>
					Create new sentence
				</Button>
			</div>
		</div>
	)
}
export default Actions
