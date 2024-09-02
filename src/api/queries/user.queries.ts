import { graphql } from '@/gql'

export const GET_USER_QUERY = graphql(`
	query getUser {
		findOne {
			id
			email
			fullName
			profilePictureUrl
		}
	}
`)
