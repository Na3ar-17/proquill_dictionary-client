import { useQuery } from '@apollo/client'
import { GET_USER_QUERY } from '../queries/user.queries'

export const useUser = () => {
	const useGetUser = () => {
		const { data, loading } = useQuery(GET_USER_QUERY, {
			context: {
				fetchOptions: {
					credentials: 'include',
				},
			},
		})
		return { data, loading }
	}
	return { useGetUser }
}
