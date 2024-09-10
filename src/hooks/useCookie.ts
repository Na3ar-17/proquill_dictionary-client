'use client'

import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'

type UseCookieReturnType = [
	string,
	(newValue: string) => void,
	() => void,
	boolean
]

export default function useCookie(
	name: string,
	defaultValue: string
): UseCookieReturnType {
	const [value, setValue] = useState<string>(defaultValue)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const cookie = Cookies.get(name)
		if (cookie) {
			setValue(cookie)
		} else {
			Cookies.set(name, defaultValue)
		}
		setIsLoading(false)
	}, [name, defaultValue])

	const updateCookie = useCallback(
		(newValue: string) => {
			Cookies.set(name, newValue)
			setValue(newValue)
		},
		[name]
	)

	const deleteCookie = useCallback(() => {
		Cookies.remove(name)
		setValue(defaultValue)
	}, [name, defaultValue])

	return [value, updateCookie, deleteCookie, isLoading]
}
