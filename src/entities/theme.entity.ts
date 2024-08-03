import { IBase } from './base'
import { ILearningProgress } from './learning-progress.entity'
import { IUser } from './user.entity'

export interface ITheme extends IBase {
	userId: string

	title?: string

	user?: IUser

	learningProgress: ILearningProgress
}
