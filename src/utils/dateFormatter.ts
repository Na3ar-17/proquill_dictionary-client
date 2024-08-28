import { format, isToday } from 'date-fns'

export const dateFormatter = (date: string): string => {
	if (isToday(date)) {
		return format(date, 'MM/dd/yyyy')
	}

	return format(date, 'hh/mm')
}
