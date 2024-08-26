import { IContent } from '@/entities/content.entity'

export interface IContentForm
	extends Pick<
		IContent,
		'sentence' | 'transcription' | 'translation' | 'themeId' | 'id'
	> {}
