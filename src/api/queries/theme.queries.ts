import { graphql } from '@/gql'

export const GET_THEMES_QUERY = graphql(`
	query themes {
		themes {
			id
			createdAt
			title
			updatedAt
			userId
			learningProgress {
				wordsLearned
				createdAt
				updatedAt
			}
		}
	}
`)
export const GET_THEME_QUERY = graphql(`
	query theme($id: String!) {
		theme(id: $id) {
			title
		}
	}
`)

export const CREATE_THEME_MUTATION = graphql(`
	mutation createTheme {
		new_theme {
			id
			createdAt
			title
		}
	}
`)

export const DELETE_THEME_MUTATION = graphql(`
	mutation deleteTheme($ids: [String!]!) {
		delete_one_or_more_theme(ids: $ids)
	}
`)

export const UPDATE_THEME_MUTATION = graphql(`
	mutation updateTheme($updateThemeDto: UpdateThemeDto!) {
		update_theme(updateThemeDto: $updateThemeDto) {
			id
			createdAt
			title
		}
	}
`)
