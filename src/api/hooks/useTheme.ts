import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'

export const useTheme = () => {
	const useGetThemes = () => {
		const GET_THEMES_QUERY = graphql(`
			query getThemes {
				getAllThemes {
					id
					createdAt
					title
				}
			}
		`)

		const { data, loading, error } = useQuery(GET_THEMES_QUERY)

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
				refetchQueries: ['getThemes'],
			}
		)
		return { mutation, mutationLoading }
	}
	return { useGetThemes, useCreateTheme }
}
