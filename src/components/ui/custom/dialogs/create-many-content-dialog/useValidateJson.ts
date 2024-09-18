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
				const multipleSpacesRegex = /\s{2,}/

				if (
					typeof obj.sentence !== 'string' ||
					typeof obj.translation !== 'string'
				) {
					return 'Each object must contain "sentence" and "translation", as strings'
				}

				if (multipleSpacesRegex.test(obj.sentence)) {
					return 'The "sentence" field must not contain multiple consecutive spaces'
				}

				if (multipleSpacesRegex.test(obj.translation)) {
					return 'The "translation" field must not contain multiple consecutive spaces'
				}

				if (obj.transcription) {
					if (typeof obj.transcription !== 'string') {
						return '"transcription" must be a string'
					}

					if (multipleSpacesRegex.test(obj.transcription)) {
						return 'The "transcription" field must not contain multiple consecutive spaces'
					}
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
