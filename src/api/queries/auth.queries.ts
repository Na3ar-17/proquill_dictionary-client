import { graphql } from '@/gql'

export const REGISTER_MUTATION = graphql(`
	mutation registration($registerDto: CreateUserInput!) {
		register(registerDto: $registerDto) {
			user {
				id
				email
				profilePictureUrl
				fullName
				createdAt
			}
			accessToken
		}
	}
`)

export const LOGIN_MUTATION = graphql(`
	mutation login($loginDto: CreateUserInput!) {
		login(loginDto: $loginDto) {
			user {
				id
				email
				profilePictureUrl
				fullName
			}
			accessToken
		}
	}
`)

export const LOGOUT_MUTATION = graphql(`
	mutation logOut {
		logout
	}
`)

export const GET_NEW_TOKENS_MUTATION = graphql(`
	mutation getNewTokens {
		getNewTokens {
			accessToken
		}
	}
`)
