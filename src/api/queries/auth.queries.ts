import { graphql } from '@/gql'

export const GET_NEW_TOKENS_MUTATION = graphql(
	`
		mutation getNewTokens {
			getNewTokens {
				accessToken
			}
		}
	`
)
