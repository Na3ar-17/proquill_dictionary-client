// import axios from '@/api/interceptors'
// import { IUser } from '@/entities/user.entity'
// import { gql } from '@apollo/client'

// const registerMutation = gql`
// 	mutation register {
// 		register() {
// 			user {
// 				id
// 				email
// 				createdAt
// 				updatedAt
// 			}
// 			accessToken
// 		}
// 	}
// `

// class AuthService {
// 	async register() {
// 		try {
// 			const { data } = await axios.post('', {
// 				query: registerMutation,
// 			})

// 			return data
// 		} catch (error) {
// 			throw error
// 		}
// 	}
// }

// export const authService = new AuthService()
