import { CreateContentManyDataInput } from '@/gql/graphql'
import { ICreateManyContentDialogForm } from '@/types/content-dialog.types'
import { UseFormSetError } from 'react-hook-form'

interface IProps {
	setError: UseFormSetError<ICreateManyContentDialogForm>
}

export const useValidateJson = ({ setError }: IProps) => {
	const validate = (jsonData: string) => {
		try {
			const jsonArray: CreateContentManyDataInput[] = JSON.parse(jsonData)

			if (!Array.isArray(jsonArray)) {
				return 'Data should be an array of objects'
			}

			if (!jsonArray.length) {
				return 'No object detected, at least one object must be provided'
			}

			for (const obj of jsonArray) {
				if (
					typeof obj.sentence !== 'string' ||
					typeof obj.translation !== 'string'
				) {
					return 'Each object must contain "sentence" and "translation", as strings'
				}
				if (obj.transcription && typeof obj.transcription !== 'string') {
					return '"transcription" must be a string'
				}
			}

			return true
		} catch (err) {
			setError('jsonData', {
				type: 'manual',
				message: err instanceof Error ? err.message : 'Invalid JSON format',
			})

			return 'Invalid JSON format'
		}
	}
	return { validate }
}
