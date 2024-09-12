import { useQuiz } from '@/api/hooks/useQuiz'
import { GET_VARIATIONS_QUERY } from '@/api/queries/quiz.queries'
import { ValidateQuizDto } from '@/gql/graphql'
import { IContentForm } from '@/types/content-form.types'
import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useQuizLogic = ({
	themeId,
	form,
}: {
	themeId: string
	form: UseFormReturn<Pick<IContentForm, 'translation'>, any, undefined>
}) => {
	const { useGetVariations, useGetResult, useRestart, useValidate } = useQuiz()
	const { data, loading, refetch, error } = useGetVariations({ themeId })
	const isEnded = data?.variations.itemsLeft === 0

	const { query, result, resultLoading } = useGetResult()
	const { restartMutation } = useRestart({ themeId })
	const { validateData, validateMutation, reset } = useValidate()

	const handleRestart = () => {
		restartMutation({
			refetchQueries: [
				{
					query: GET_VARIATIONS_QUERY,
					variables: { themeId },
				},
			],
		})
	}

	const handleValidate = (dto: ValidateQuizDto) => {
		validateMutation({
			variables: { validateQuizDto: dto },
		})
	}

	const onSubmit = () => {
		refetch().then(() => {
			form.reset({
				translation: '',
			})
			reset()
		})
	}

	useEffect(() => {
		if (isEnded) {
			query({
				variables: { themeId },
				fetchPolicy: 'network-only',
				nextFetchPolicy: 'network-only',
			})
		}
	}, [isEnded])
	useEffect(() => {
		if (error) {
			toast.error(error.message)
		}
	}, [error])
	return {
		isEnded,
		loading,
		data,
		result,
		handleRestart,
		resultLoading,
		validateData,
		onSubmit,
		handleValidate,
		error,
	}
}
