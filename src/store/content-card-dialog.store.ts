import { create } from 'zustand'

interface IState {
	isDialogOpen: boolean
	onOpen: () => void
	onClose: () => void
	id?: string
}
interface IAction {
	onOpen: () => void
	onClose: () => void
	setId: (id: string) => void
}

export const useContentCardDialog = create<IAction & IState>(set => ({
	id: '',
	setId: (id: string) => set({ id }),
	isDialogOpen: false,
	onOpen: () => set({ isDialogOpen: true }),
	onClose: () => set({ isDialogOpen: false }),
}))
