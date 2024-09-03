import { graphql } from '@/gql'
import { ValidateSelectedTranslation } from '@/gql/graphql'
import { useMutation, useQuery } from '@apollo/client'

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

	const useValidateSelectedTranslation = (dto: ValidateSelectedTranslation) => {
		const VALIDATE_SELECTED_TRANSLATION_MUTATION = graphql(`
			mutation validateSelectedTranslation($dto: ValidateSelectedTranslation!) {
				validateSelectedTranslation(validateSelectedTranslation: $dto)
			}
		`)

		const [
			mutation,
			{
				data: validateSelectedTranslationData,
				loading: validateSelectedTranslationLoading,
			},
		] = useMutation(VALIDATE_SELECTED_TRANSLATION_MUTATION, {
			variables: { dto },
		})
		return {
			mutation,
			validateSelectedTranslationData,
			validateSelectedTranslationLoading,
		}
	}
	return { useGetForSelectTrueTranslation, useValidateSelectedTranslation }
}
