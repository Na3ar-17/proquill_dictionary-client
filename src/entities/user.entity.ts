import { IBase } from './base'
import { ITheme } from './theme.entity'

export interface IUser extends IBase {
	email: string

	password: string

	fullName?: string

	profilePictureUrl?: string

	themes: ITheme[]
}
