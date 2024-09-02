import { graphql } from '@/gql'

export const GET_THEMES_QUERY = graphql(`
	query getAllThemes {
		getAllThemes {
			id
			createdAt
			title
		}
	}
`)
export const GET_THEME_QUERY = graphql(`
	query getTheme($id: String!) {
		getOneTheme(id: $id) {
			title
		}
	}
`)

export const CREATE_THEME_MUTATION = graphql(`
	mutation createTheme {
		createTheme {
			id
			createdAt
			title
		}
	}
`)

export const DELETE_THEME_MUTATION = graphql(`
	mutation deleteTheme($ids: [String!]!) {
		deleteOneOrMoreTheme(ids: $ids)
	}
`)

export const UPDATE_THEME_MUTATION = graphql(`
	mutation updateTheme($updateThemeInput: UpdateThemeInput!) {
		updateTheme(updateThemeInput: $updateThemeInput) {
			id
			createdAt
			title
		}
	}
`)
