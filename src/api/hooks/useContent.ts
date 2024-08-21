import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'

export const useContent = () => {
	const useGetContent = ({ themeId }: { themeId: string }) => {
		const GET_CONTENT_QUERY = graphql(`
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

		const { data, loading, error } = useQuery(GET_CONTENT_QUERY, {
			variables: { themeId },
		})

		return { data, loading, error }
	}
	const useCreateContent = () => {
		const CREATE_CONTENT_MUTATION = graphql(`
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

		const [
			mutation,
			{
				loading: createContentLoading,
				error: createContentError,
				data: createContentResData,
			},
		] = useMutation(CREATE_CONTENT_MUTATION, {
			refetchQueries: ['getAllContent'],
		})

		return {
			mutation,
			createContentLoading,
			createContentError,
			createContentResData,
		}
	}

	const useDeleteContent = () => {
		const DELETE_CONTENT_MUTATION = graphql(`
			mutation deleteContent($ids: [String!]!, $themeId: String!) {
				deleteOneOrMoreContent(ids: $ids, themeId: $themeId)
			}
		`)

		const [mutation, { loading, error }] = useMutation(
			DELETE_CONTENT_MUTATION,
			{
				refetchQueries: ['getAllContent'],
			}
		)

		return { mutation, loading, error }
	}
	const useUpdateContent = () => {
		const UPDATE_CONTENT_MUTATION = graphql(`
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

		const [mutation, { loading, error }] = useMutation(
			UPDATE_CONTENT_MUTATION,
			{
				refetchQueries: ['getAllContent'],
			}
		)

		return { mutation, loading, error }
	}
	return { useCreateContent, useDeleteContent, useGetContent, useUpdateContent }
}
