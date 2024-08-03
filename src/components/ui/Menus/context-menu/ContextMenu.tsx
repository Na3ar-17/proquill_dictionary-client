import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '@/components/shadcn/ui/context-menu'
import { NextPage } from 'next'

import { Pencil, Trash2 } from 'lucide-react'
import { PropsWithChildren } from 'react'
import styles from './ContextMenu.module.scss'

interface IProps extends PropsWithChildren {}

const ContextMenuComponent: NextPage<IProps> = ({ children }) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className='w-64'>
				<ContextMenuItem inset>
					<Pencil className='absolute left-2 size-4 top-2' />
					Rename
					<ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem inset>
					<Trash2 className='absolute left-2 size-4 top-2' />
					Delete
					<ContextMenuShortcut>Ctrl+D</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default ContextMenuComponent
