import { graphql } from '@/gql'

export const GET_CONTENT_QUERY = graphql(`
	query contents($themeId: String!) {
		contents(themeId: $themeId) {
			id
			createdAt
			sentence
			translation
			transcription
			themeId
			lernedCounts
			hasLearned
			exampleSentences
			imageUrl
		}
	}
`)
export const GET_CONTENT_LENGTH = graphql(`
	query contentLength($themeId: String!) {
		content_length(themeId: $themeId)
	}
`)
export const GET_ONE_CONTENT_QUERY = graphql(`
	query content($id: String!, $themeId: String!) {
		content(id: $id, themeId: $themeId) {
			id
			createdAt
			sentence
			translation
			transcription
			themeId
			lernedCounts
			hasLearned
			exampleSentences
			imageUrl
		}
	}
`)

export const CREATE_CONTENT_MUTATION = graphql(`
	mutation newContent($createContentDto: CreateContentDto!) {
		new_content(createContentDto: $createContentDto) {
			id
			createdAt
			sentence
			translation
			transcription
			themeId
			lernedCounts
			hasLearned
			exampleSentences
			imageUrl
		}
	}
`)
export const DELETE_MANY_CONTENT_MUTATION = graphql(`
	mutation deleteManyContent($ids: [String!]!, $themeId: String!) {
		delete_many_content(ids: $ids, themeId: $themeId)
	}
`)

export const DELETE_CONTENT_MUTATION = graphql(`
	mutation deleteContent($id: String!, $themeId: String!) {
		delete_content(id: $id, themeId: $themeId) {
			id
			createdAt
			sentence
			translation
			transcription
			themeId
			lernedCounts
			hasLearned
			exampleSentences
			imageUrl
		}
	}
`)
export const UPDATE_CONTENT_MUTATION = graphql(`
	mutation updateContent($updateContentDto: UpdateContentDto!) {
		update_content(updateContentDto: $updateContentDto) {
			id
			createdAt
			sentence
			translation
			transcription
			themeId
			lernedCounts
			hasLearned
			exampleSentences
			imageUrl
		}
	}
`)
