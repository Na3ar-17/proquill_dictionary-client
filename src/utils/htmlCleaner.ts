export const htmlCleaner = (text: string): string => {
	return text.replace(/(<([^>]+)>)/gi, '')
}
