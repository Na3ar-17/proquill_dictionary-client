import { IBase } from './base'

export interface ILearningProgress extends Omit<IBase, 'id'> {
	userId: string

	themeId: string

	wordsLearned: number

	accuracyRate?: number

	lastStudiedAt?: Date
}
