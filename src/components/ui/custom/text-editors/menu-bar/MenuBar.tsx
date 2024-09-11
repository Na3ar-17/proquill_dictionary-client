import { Toggle } from '@/components/ui/toggle'
import { Editor } from '@tiptap/react'
import { Bold, Italic } from 'lucide-react'
import { NextPage } from 'next'
interface IProps {
	editor: Editor | null
}

const MenuBar: NextPage<IProps> = ({ editor }) => {
	if (!editor) {
		return null
	}
	return (
		<div className='flex itmes gap-1'>
			<Toggle
				size={'sm'}
				onPressedChange={() => editor.chain().focus().toggleBold().run()}
				disabled={!editor.can().chain().focus().toggleBold().run()}
				pressed={editor.isActive('bold')}
			>
				<Bold className='size-3' />
			</Toggle>

			<Toggle
				size={'sm'}
				onPressedChange={() => editor.chain().focus().toggleItalic().run()}
				disabled={!editor.can().chain().focus().toggleItalic().run()}
				pressed={editor.isActive('italic')}
			>
				<Italic className='size-3' />
			</Toggle>
		</div>
	)
}

export default MenuBar
