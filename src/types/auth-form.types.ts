import { IUser } from '@/entities/user.entity'
export interface IAuthFormData extends Pick<IUser, 'email' | 'fullName'> {
	password: string
}
