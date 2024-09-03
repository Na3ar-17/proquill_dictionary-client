import { graphql } from '@/gql'
import { useQuery } from '@apollo/client'

export const useStudy = () => {
	const useGetForSelectTrueTranslation = ({ themeId }: { themeId: string }) => {
		const GET_FOR_SELECT_TRUE_TRANSLATION_QUERY = graphql(`
			query GetForSelectTrueTranslation($themeId: String!) {
				selectTrueTranslation(themeId: $themeId) {
					id
					itemsLeft
					themeId
					sentence
					variations {
						translation
					}
				}
			}
		`)

		const query = useQuery(GET_FOR_SELECT_TRUE_TRANSLATION_QUERY, {
			variables: { themeId },
			skip: !themeId,
		})
		return query
	}
	return { useGetForSelectTrueTranslation }
}
