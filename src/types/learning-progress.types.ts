export interface ILearningProgress {
	createdAt: Date

	updatedAt: Date

	userId: string

	themeId: string

	wordsLearned: number

	accuracyRate?: number

	lastStudiedAt?: Date
}
