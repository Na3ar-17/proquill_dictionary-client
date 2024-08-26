import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'
import toast from 'react-hot-toast'

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

		const { data, loading, error, refetch } = useQuery(GET_CONTENT_QUERY, {
			variables: { themeId },
		})

		return { data, loading, error, refetch }
	}
	const useGetOneContent = ({
		themeId,
		id,
	}: {
		themeId: string
		id: string
	}) => {
		const GET_ONE_CONTENT_QUERY = graphql(`
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

		const query = useQuery(GET_ONE_CONTENT_QUERY, {
			variables: { themeId, id },
			skip: !id,
		})

		return query
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

		const mutation = useMutation(CREATE_CONTENT_MUTATION, {
			refetchQueries: ['getAllContent'],
			onCompleted: () => {
				toast.success('Successfully created nontent')
			},
		})

		return mutation
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

		const mutation = useMutation(UPDATE_CONTENT_MUTATION, {
			refetchQueries: ['getAllContent'],
		})

		return mutation
	}
	return {
		useCreateContent,
		useDeleteContent,
		useGetContent,
		useUpdateContent,
		useGetOneContent,
	}
}
