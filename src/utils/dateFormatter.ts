import { format, isToday } from 'date-fns'

export const dateFormatter = (date: string): string => {
	if (isToday(date)) {
		return format(date, 'HH:mm')
	}
	return format(date, 'dd.MM.yyyy')
}
