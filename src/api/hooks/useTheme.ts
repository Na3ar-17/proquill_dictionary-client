import { Theme } from '@/gql/graphql'
import { useMutation, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import {
	CREATE_THEME_MUTATION,
	DELETE_THEME_MUTATION,
	GET_THEME_QUERY,
	GET_THEMES_QUERY,
	UPDATE_THEME_MUTATION,
} from '../queries/theme.queries'

export const useTheme = () => {
	const useGetThemes = () => {
		const [themes, setThemes] = useState<Theme[] | undefined>(undefined)
		const { data, loading, error } = useQuery(GET_THEMES_QUERY, {
			errorPolicy: 'all',
			onCompleted: data => {
				setThemes(data.themes)
			},
		})

		useEffect(() => {
			if (data) setThemes(data.themes)
		}, [data])

		return {
			themes,
			loading,
			error,
			setThemes,
		}
	}
	const useGetTheme = ({ id }: { id: string }) => {
		const { data, loading, error } = useQuery(GET_THEME_QUERY, {
			variables: { id },
		})

		return {
			data,
			loading,
			error,
		}
	}

	const useCreateTheme = () => {
		const [mutation, { loading: mutationLoading }] = useMutation(
			CREATE_THEME_MUTATION,
			{
				refetchQueries: [
					{
						query: GET_THEMES_QUERY,
					},
				],
			}
		)
		return { mutation, mutationLoading }
	}

	const useDeleteTheme = () => {
		const [mutation, { loading, called }] = useMutation(DELETE_THEME_MUTATION, {
			refetchQueries: [
				{
					query: GET_THEMES_QUERY,
				},
			],
			onError: ({ message }) => {
				console.error(message)
			},
		})
		return { mutation, loading, called }
	}

	const useUpdateTheme = () => {
		const [mutation, { loading, called }] = useMutation(UPDATE_THEME_MUTATION, {
			refetchQueries: [
				{
					query: GET_THEMES_QUERY,
				},
			],
		})
		return { mutation, loading, called }
	}
	return {
		useGetThemes,
		useCreateTheme,
		useDeleteTheme,
		useUpdateTheme,
		useGetTheme,
	}
}
