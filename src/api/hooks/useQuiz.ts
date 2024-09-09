import { useMutation, useQuery } from '@apollo/client'
import {
	GET_RESULT_QUERY,
	GET_VARIATIONS_QUERY,
	RESTART_MUTATION,
	VALIDATE_MUTATION,
} from '../queries/quiz.queries'

export const useQuiz = () => {
	const useGetVariations = ({ themeId }: { themeId: string }) => {
		const { data, loading, error, refetch } = useQuery(GET_VARIATIONS_QUERY, {
			variables: { themeId },
		})

		return { data, loading, error, refetch }
	}

	const useGetResult = ({ themeId }: { themeId: string }) => {
		const {
			data: result,
			loading: resultLoading,
			error: resultError,
		} = useQuery(GET_RESULT_QUERY, {
			variables: { themeId },
		})

		return { result, resultLoading, resultError }
	}
	const useRestart = ({ themeId }: { themeId: string }) => {
		const {
			'0': restartMutation,
			'1': { data: restartData, loading: restartLoading, error: restartError },
		} = useMutation(RESTART_MUTATION, {
			variables: { themeId },
		})

		return { restartMutation, restartData, restartLoading, restartError }
	}
	const useValidate = () => {
		const {
			'0': validateMutation,
			'1': {
				data: validateData,
				loading: validateLoading,
				error: validateError,
			},
		} = useMutation(VALIDATE_MUTATION)

		return { validateMutation, validateData, validateLoading, validateError }
	}
	return { useGetVariations, useGetResult, useRestart, useValidate }
}
