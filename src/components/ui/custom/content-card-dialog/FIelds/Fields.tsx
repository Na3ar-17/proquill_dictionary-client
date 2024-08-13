import { Button } from '@/components/ui/button'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { IContentForm } from '@/types/content-form.types'
import { NextPage } from 'next'
import { type } from 'os'
import { Control } from 'react-hook-form'
import TipTap from '../../text-editors/tiptap/Tiptap'

interface IProps {
	control: Control<IContentForm>
}

const Fields: NextPage<IProps> = ({ control }) => {
	return (
		<div className='grid grid-cols-2 gap-8'>
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
		</div>
	)
}

export default Fields
