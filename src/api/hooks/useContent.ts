import { graphql } from '@/gql'
import { useQuery } from '@apollo/client'

export const useContent = () => {
	const useGetContent = () => {
		const GET_CONTENT_QUERY = graphql(`
			query getAllContent($themeId: String!) {
				getAllContent(themeId: $themeId) {
					id
					createdAt
					sentence
					translation
					transcription
				}
			}
		`)

		const { data, loading, error } = useQuery(GET_CONTENT_QUERY)

		return { data, loading, error }
	}
	return {}
}
