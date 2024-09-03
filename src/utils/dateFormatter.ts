import { format, isToday, isYesterday } from 'date-fns'

export const dateFormatter = (date: string): string => {
	if (isToday(date)) {
		return `Today ${format(date, 'HH:mm')}`
	}

	if (isYesterday(date)) {
		return `Yesterday ${format(date, 'HH:mm')}`
	}

	return format(date, 'dd.MM.yyyy')
}
