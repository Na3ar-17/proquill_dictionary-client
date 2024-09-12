import { Content } from '@/gql/graphql'

export interface IContentForm
	extends Pick<
		Content,
		'sentence' | 'transcription' | 'translation' | 'themeId' | 'id'
	> {}
