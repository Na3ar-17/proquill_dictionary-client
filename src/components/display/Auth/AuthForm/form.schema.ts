import { z } from 'zod'

export const authFormSchema = z.object({
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters.',
	}),
	email: z.string().min(6, {
		message: 'Email must be at least 6 characters.',
	}),
	fullName: z.string().optional(),
})
