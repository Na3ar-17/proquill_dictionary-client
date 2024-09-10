import { useQuiz } from '@/api/hooks/useQuiz'
import { ValidateQuizDto } from '@/gql/graphql'
import { IContentForm } from '@/types/content-form.types'
import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'

export const useQuizLogic = ({
	themeId,
	form,
}: {
	themeId: string
	form: UseFormReturn<Pick<IContentForm, 'translation'>, any, undefined>
}) => {
	const { useGetVariations, useGetResult, useRestart, useValidate } = useQuiz()
	const { data, loading, refetch } = useGetVariations({ themeId })
	const isEnded = data?.variations.itemsLeft === 0

	const { query, result, resultLoading } = useGetResult()
	const { restartMutation } = useRestart({ themeId })
	const { validateData, validateLoading, validateMutation, reset } =
		useValidate()

	const handleRestart = () => {
		restartMutation({
			variables: { themeId },
			refetchQueries: ['getVariations'],
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
	}
}
