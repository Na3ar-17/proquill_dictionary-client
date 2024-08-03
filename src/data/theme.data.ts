import { ITheme } from '@/entities/theme.entity'

export const themeData: ITheme[] = [
	{
		id: 'asdsd',
		createdAt: new Date(),
		updatedAt: new Date(),
		userId: 'sdsdf',
		title: 'sdsd',
		learningProgress: {
			createdAt: new Date(),
			updatedAt: new Date(),
			themeId: 'asdsd',
			userId: 'sdsdf',
			wordsLearned: 0,
			accuracyRate: 0,
			lastStudiedAt: new Date(),
		},
	},
]
