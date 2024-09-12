import { User } from '@/gql/graphql'

export interface IAuthFormData extends Pick<User, 'email' | 'fullName'> {
	password: string
}
