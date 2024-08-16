import { NextRequest, NextResponse } from 'next/server'
import { PAGES_URL } from './config/pages-url.config'
import { EnumTokens } from './types/auth-token.types'

export default async function middleware(
	request: NextRequest,
	response: NextResponse
) {
	const { url, cookies } = request
	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage =
		url.includes(PAGES_URL.LOGIN) || url.includes(PAGES_URL.REGISTER)

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(PAGES_URL.DICTIONARY, url))
	}

	if (!refreshToken && !isAuthPage) {
		return NextResponse.redirect(new URL(PAGES_URL.LOGIN, url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/', '/((?!_next|_vercel|.*\\..*).*)'],
}
