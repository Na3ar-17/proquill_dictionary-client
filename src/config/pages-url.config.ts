class PagesUrl {
	private root = 'http://localhost:3000'

	MAIN: string
	REGISTER: string
	LOGIN: string
	DICTIONARY: string

	constructor() {
		this.MAIN = this.root
		this.REGISTER = `${this.root}/registration`
		this.LOGIN = `${this.root}/login`
		this.DICTIONARY = `${this.root}/dictionary`
	}
}

export const PAGES_URL = new PagesUrl()
