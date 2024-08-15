import { gql, useQuery } from '@apollo/client'

export const useUser = () => {
	const useGetUser = () => {
		const GET_USER_QUERY = gql`
			query getUser {
				findOne {
					id
					email
					fullName
					profilePictureUrl
				}
			}
		`

		const { data, loading, error } = useQuery(GET_USER_QUERY, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
			onCompleted: ({ findOne }) => {
				console.log(findOne)
			},
			onError: error => {
				console.log(error.message)
			},
		})
		return { data, loading }
	}
	return { useGetUser }
}
