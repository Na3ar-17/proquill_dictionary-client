import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { ApolloWrapper } from './ApolloWrapper'
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
			<body
				suppressHydrationWarning
				suppressContentEditableWarning
				className={inter.className}
			>
				<ApolloWrapper>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster
							position='top-center'
							toastOptions={{
								style: {
									borderRadius: '10px',
									background: '#333',
									color: '#fff',
								},
							}}
						/>
					</ThemeProvider>
				</ApolloWrapper>
			</body>
		</html>
	)
}
