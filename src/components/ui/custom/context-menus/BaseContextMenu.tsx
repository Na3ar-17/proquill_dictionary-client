import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Pencil, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { PropsWithChildren } from 'react'
interface IProps extends PropsWithChildren {
	isRename?: boolean
	onDelete: () => void
	onRename?: () => void
}

const BaseContextMenu: NextPage<IProps> = ({
	children,
	isRename = true,
	onDelete,
	onRename,
}) => {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem
					onClick={onDelete}
					className='cursor-pointer flex gap-2 transition-colors items-center'
				>
					<Trash2 className='size-4' />
					<span>Delete</span>
				</ContextMenuItem>
				{isRename && (
					<ContextMenuItem
						onClick={onRename}
						className='cursor-pointer flex gap-2 transition-colors items-center'
					>
						<Pencil className='size-4' />
						<span>Rename</span>
					</ContextMenuItem>
				)}
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default BaseContextMenu
