import { ThemeToogler } from '@/components/ui/theme-toogler'
import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Proquill.dictionary',
	description: 'Proquill.dictionary',
}
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning className={inter.className}>
				<ApolloWrapper>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						{children}
					</ThemeProvider>
				</ApolloWrapper>
			</body>
		</html>
	)
}
