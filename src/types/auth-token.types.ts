export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken',
}

export interface ITokensResponse {
	getNewTokens: {
		accessToken: string
	}
}
