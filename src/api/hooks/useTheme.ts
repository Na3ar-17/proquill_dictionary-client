import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'

export const useTheme = () => {
	const useGetThemes = () => {
		const GET_THEMES_QUERY = graphql(`
			query getAllThemes {
				getAllThemes {
					id
					createdAt
					title
				}
			}
		`)

		const { data, loading, error } = useQuery(GET_THEMES_QUERY, {
			errorPolicy: 'all',
		})

		return {
			data,
			loading,
			error,
		}
	}

	const useCreateTheme = () => {
		const CREATE_THEME_MUTATION = graphql(`
			mutation createTheme {
				createTheme {
					id
					createdAt
					title
				}
			}
		`)

		const [mutation, { loading: mutationLoading }] = useMutation(
			CREATE_THEME_MUTATION,
			{
				refetchQueries: ['getAllThemes'],
			}
		)
		return { mutation, mutationLoading }
	}

	const useDeleteTheme = () => {
		const DELETE_THEME_MUTATION = graphql(`
			mutation deleteTheme($ids: [String!]!) {
				deleteOneOrMoreTheme(ids: $ids)
			}
		`)

		const [mutation, { loading, called }] = useMutation(DELETE_THEME_MUTATION, {
			refetchQueries: ['getAllThemes'],
			onError: ({ message }) => {
				console.error(message)
			},
		})
		return { mutation, loading, called }
	}

	const useUpdateTheme = () => {
		const UPDATE_THEME_MUTATION = graphql(`
			mutation updateTheme($updateThemeInput: UpdateThemeInput!) {
				updateTheme(updateThemeInput: $updateThemeInput) {
					id
					createdAt
					title
				}
			}
		`)

		const [mutation, { loading, called }] = useMutation(UPDATE_THEME_MUTATION, {
			refetchQueries: ['getAllThemes'],
		})
		return { mutation, loading, called }
	}
	return { useGetThemes, useCreateTheme, useDeleteTheme, useUpdateTheme }
}
