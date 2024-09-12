import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Pencil, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
const ContentCardContextMenu: NextPage = ({ children }: PropsWithChildren) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem className='cursor-pointer flex gap-2 transition-colors items-center'>
					<Trash2 className='size-4' />
					<span>Delete</span>
				</ContextMenuItem>
				<ContextMenuItem className='cursor-pointer flex gap-2 transition-colors items-center'>
					<Pencil className='size-4' />
					<span>Rename</span>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default ContentCardContextMenu
