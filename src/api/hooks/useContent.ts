import { useMutation, useQuery } from '@apollo/client'
import toast from 'react-hot-toast'
import {
	CREATE_CONTENT_MUTATION,
	DELETE_CONTENT_MUTATION,
	DELETE_MANY_CONTENT_MUTATION,
	GET_CONTENT_QUERY,
	GET_ONE_CONTENT_QUERY,
	UPDATE_CONTENT_MUTATION,
} from '../queries/content.queris'

export const useContent = () => {
	const useGetContent = ({ themeId }: { themeId: string }) => {
		const { data, loading, error, refetch, previousData } = useQuery(
			GET_CONTENT_QUERY,
			{
				variables: { themeId },
			}
		)
		return { data, loading, error, refetch, previousData }
	}
	const useGetOneContent = ({
		themeId,
		id,
	}: {
		themeId: string
		id: string
	}) => {
		const query = useQuery(GET_ONE_CONTENT_QUERY, {
			variables: { themeId, id },
			skip: !id || !themeId,
		})

		return query
	}
	const useCreateContent = () => {
		const mutation = useMutation(CREATE_CONTENT_MUTATION, {
			refetchQueries: ['getAllContent'],
			onCompleted: () => {
				toast.success('Successfully created nontent')
			},
		})

		return mutation
	}

	const useDeleteManyContent = () => {
		const [mutation, { loading, error, data }] = useMutation(
			DELETE_MANY_CONTENT_MUTATION,
			{
				refetchQueries: ['getAllContent'],
			}
		)
		return { mutation, loading, error, data }
	}

	const useDeleteOneContent = () => {
		const { '0': deleteOneContentMutation } = useMutation(
			DELETE_CONTENT_MUTATION,
			{
				refetchQueries: ['getAllContent'],
			}
		)
		return { deleteOneContentMutation }
	}
	const useUpdateContent = () => {
		const mutation = useMutation(UPDATE_CONTENT_MUTATION, {
			refetchQueries: ['getAllContent'],
		})

		return mutation
	}
	return {
		useCreateContent,
		useDeleteManyContent,
		useGetContent,
		useUpdateContent,
		useGetOneContent,
		useDeleteOneContent,
	}
}
