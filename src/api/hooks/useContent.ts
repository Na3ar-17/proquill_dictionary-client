import { useMutation, useQuery } from '@apollo/client'
import toast from 'react-hot-toast'
import {
	CREATE_CONTENT_MUTATION,
	CREATE_MANY_CONTENT_MUTATION,
	DELETE_CONTENT_MUTATION,
	DELETE_MANY_CONTENT_MUTATION,
	GET_CONTENT_LENGTH,
	GET_CONTENT_QUERY,
	GET_ONE_CONTENT_QUERY,
	UPDATE_CONTENT_MUTATION,
} from '../queries/content.queries'

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
			refetchQueries: [
				{
					query: GET_CONTENT_QUERY,
				},
			],
			onCompleted: () => {
				toast.success('Successfully created nontent')
			},
		})

		return mutation
	}
	const useCreateManyContent = () => {
		const mutation = useMutation(CREATE_MANY_CONTENT_MUTATION, {
			refetchQueries: [
				{
					query: GET_CONTENT_QUERY,
				},
			],
			onCompleted: () => {
				toast.success('Successfully created contents')
			},
		})

		return mutation
	}

	const useDeleteManyContent = ({ themeId }: { themeId: string }) => {
		const [mutation, { loading, error, data }] = useMutation(
			DELETE_MANY_CONTENT_MUTATION,
			{
				refetchQueries: [
					{
						query: GET_CONTENT_QUERY,
						variables: { themeId },
					},
				],
			}
		)
		return { mutation, loading, error, data }
	}

	const useDeleteOneContent = () => {
		const { '0': deleteOneContentMutation } = useMutation(
			DELETE_CONTENT_MUTATION,
			{
				refetchQueries: ({ data }) => [
					{
						query: GET_CONTENT_QUERY,
						variables: { themeId: data?.delete_content.themeId },
					},
				],
			}
		)
		return { deleteOneContentMutation }
	}
	const useUpdateContent = () => {
		const mutation = useMutation(UPDATE_CONTENT_MUTATION, {
			refetchQueries: [
				{
					query: GET_CONTENT_QUERY,
				},
			],
		})

		return mutation
	}

	const useGetContentLength = ({ themeId }: { themeId: string }) => {
		const { data, loading: isContentLengthLoading } = useQuery(
			GET_CONTENT_LENGTH,
			{ variables: { themeId } }
		)

		return { data, isContentLengthLoading }
	}
	return {
		useCreateContent,
		useDeleteManyContent,
		useGetContent,
		useUpdateContent,
		useGetOneContent,
		useDeleteOneContent,
		useGetContentLength,
		useCreateManyContent,
	}
}
