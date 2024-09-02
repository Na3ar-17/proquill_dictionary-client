'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { NextPage } from 'next'
import MenuBar from '../menu-bar/MenuBar'
import './Tiptap.css'

interface IProps {
	content: string
	onChange?: (text: string) => void
}

const TipTap: NextPage<IProps> = ({ content, onChange }) => {
	const editor = useEditor({
		extensions: [StarterKit.configure()],
		content: content,
		onUpdate: ({ editor }) => {
			if (onChange) {
				onChange(editor.getHTML())
			}
		},
		editorProps: {
			attributes: {
				class:
					'min-h-[80px] resize w-full break-words rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
			},
		},
		immediatelyRender: false,
	})

	return (
		<div className='flex flex-col gap-1.5'>
			<>
				<MenuBar editor={editor} />
				<EditorContent editor={editor} />
			</>
		</div>
	)
}

export default TipTap
