import { graphql } from '@/gql'

export const GET_VARIATIONS_QUERY = graphql(`
	query variations($themeId: String!) {
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
	query result($themeId: String!) {
		result(themeId: $themeId) {
			correctAnswers
		}
	}
`)
export const RESTART_MUTATION = graphql(`
	mutation restart($themeId: String!) {
		restart(themeId: $themeId)
	}
`)
export const VALIDATE_MUTATION = graphql(`
	mutation validate($validateQuizDto: ValidateQuizDto!) {
		validate(validateQuizDto: $validateQuizDto) {
			isCorrect
			correctTranslation
		}
	}
`)
