'use client'
import { NextPage } from 'next'

import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { IContentForm } from '@/types/content-form.types'
import { PropsWithChildren } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../../form'

import TipTap from '../text-editors/tiptap/Tiptap'
interface IProps extends PropsWithChildren {}

const ContentCardDialog: NextPage<IProps> = ({ children }) => {
	const form = useForm<IContentForm>({
		mode: 'onChange',
	})
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogTitle></DialogTitle>
			<DialogContent className='min-w-[70%]'>
				<Form {...form}>
					<form className='flex flex-col gap-4'>
						<div className='grid grid-cols-2 gap-8'>
							<FormField
								control={form.control}
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
								control={form.control}
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
								control={form.control}
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
						<div className='flex justify-end items-center'>
							<Button variant={'secondary'}>Save</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

export default ContentCardDialog
