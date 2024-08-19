import Dictionary from '@/components/display/Dictionary/Dictionary'
import { getClient, query } from '@/config/ApolloClient'
import { graphql } from '@/gql'
import { NextPage } from 'next'

// const GET_THEMES_QUERY = graphql(`
// 	query getThemes {
// 		getAllThemes {
// 			id
// 			createdAt
// 			title
// 			learningProgress {
// 				wordsLearned
// 			}
// 		}
// 	}
// `)

const page: NextPage = () => {
	// const { data, loading, error } = await getClient().query({
	// 	query: GET_THEMES_QUERY,
	// 	context: {
	// 		fetchOptions: {
	// 			credentials: 'include',
	// 		},
	// 	},
	// })

	// if (error) {
	// 	console.log(error.message)
	// }
	return <Dictionary />
}

export default page
