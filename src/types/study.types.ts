export interface ISelectTrueTranslation {
	id: string

	itemsLeft: number

	themeId: string

	sentence: string

	variations: IVariations[]
}

export interface IVariations {
	translation: string
}
