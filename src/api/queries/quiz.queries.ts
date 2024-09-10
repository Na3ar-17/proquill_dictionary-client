import { graphql } from '@/gql'

export const GET_VARIATIONS_QUERY = graphql(`
	query getVariations($themeId: String!) {
		variations(themeId: $themeId) {
			itemsLeft
			totalItems
			themeId
			sentence
			contentId
			variations {
				translation
			}
		}
	}
`)
export const GET_RESULT_QUERY = graphql(`
	query getResult($themeId: String!) {
		result(themeId: $themeId) {
			correctAnswers
		}
	}
`)
export const RESTART_MUTATION = graphql(`
	mutation restartMutation($themeId: String!) {
		restart(themeId: $themeId)
	}
`)
export const VALIDATE_MUTATION = graphql(`
	mutation validateMutation($validateQuizDto: ValidateQuizDto!) {
		validate(validateQuizDto: $validateQuizDto) {
			isCorrect
			correctTranslation
		}
	}
`)
