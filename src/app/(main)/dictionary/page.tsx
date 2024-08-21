import Dictionary from '@/components/display/Dictionary/Dictionary'
import { getClient } from '@/config/ApolloClient'
import { graphql } from '@/gql'
import { NextPage } from 'next'

const page: NextPage = () => {
	return <Dictionary />
}

export default page
