import { graphql } from '@/gql'

export const GET_CONTENT_QUERY = graphql(`
	query getAllContent($themeId: String!) {
		getAllContent(themeId: $themeId) {
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
	query getContentLength($themeId: String!) {
		getContentLength(themeId: $themeId)
	}
`)
export const GET_ONE_CONTENT_QUERY = graphql(`
	query getOneContent($id: String!, $themeId: String!) {
		getOneContent(id: $id, themeId: $themeId) {
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
	mutation crateContent($createContentInput: CreateContentInput!) {
		createContent(createContentInput: $createContentInput) {
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
		deleteManyContent(ids: $ids, themeId: $themeId)
	}
`)

export const DELETE_CONTENT_MUTATION = graphql(`
	mutation deleteContent($id: String!, $themeId: String!) {
		deleteContent(id: $id, themeId: $themeId) {
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
	mutation updateContent($updateContentInput: UpdateContentInput!) {
		updateContent(updateContentInput: $updateContentInput) {
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
