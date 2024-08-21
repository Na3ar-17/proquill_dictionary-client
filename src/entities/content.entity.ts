import { IBase } from './base'

export interface IContent extends IBase {
	themeId: string

	sentence: string

	translation: string

	lernedCounts: number

	hasLearned: boolean

	transcription?: string | null | undefined

	exampleSentences?: string[] | null | undefined[]

	imageUrl?: string | null | undefined
}
