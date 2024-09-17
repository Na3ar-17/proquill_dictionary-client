import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { IContentForm } from '@/types/content-form.types'
import { NextPage } from 'next'
import { Control } from 'react-hook-form'
import TipTap from '../../../text-editors/tiptap/Tiptap'

interface IProps {
	control: Control<IContentForm>
	isLoading: boolean
}

const Fields: NextPage<IProps> = ({ control, isLoading }) => {
	return (
		<div className='grid grid-cols-2 gap-8 items-end'>
			{isLoading ? (
				<Skeleton className='h-[122px]' />
			) : (
				<FormField
					control={control}
					name='sentence'
					render={({ field: { value, onChange } }) => (
						<FormItem>
							<FormLabel>Sentence</FormLabel>
							<FormControl>
								<TipTap content={value} onChange={onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}

			{isLoading ? (
				<Skeleton className='h-[122px]' />
			) : (
				<FormField
					control={control}
					name='translation'
					render={({ field: { value, onChange } }) => (
						<FormItem>
							<FormLabel>Translation</FormLabel>
							<FormControl>
								<TipTap content={value} onChange={onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}

			{isLoading ? (
				<Skeleton className='h-[122px]' />
			) : (
				<FormField
					control={control}
					name='transcription'
					render={({ field: { value, onChange } }) => (
						<FormItem>
							<FormLabel>Transcription</FormLabel>
							<FormControl>
								<TipTap content={value || ''} onChange={onChange} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			)}
		</div>
	)
}

export default Fields
