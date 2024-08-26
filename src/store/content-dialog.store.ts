import { create } from 'zustand'

interface IState {
	isOpen: boolean
}

interface IAction {
	onClose: () => void
	onOpen: () => void
}

export const useContentCardDialogStore = create<IState & IAction>(set => ({
	isOpen: false,
	onClose: () => set({ isOpen: false }),
	onOpen: () => set({ isOpen: true }),
}))
