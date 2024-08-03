import { ILearningProgress } from './learning-progress.types'

export interface ITheme {
	id: string

	createdAt: Date

	updatedAt: Date

	userId: string

	title?: string

	learningProgress: ILearningProgress
}
