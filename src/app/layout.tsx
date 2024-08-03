import { ApolloWrapper } from '@/lib/apollo-wrapper'
import { Providers } from '@/providers/Providers'
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
			<Providers>
				<body suppressHydrationWarning className={inter.className}>
					<ApolloWrapper>{children}</ApolloWrapper>
				</body>
			</Providers>
		</html>
	)
}
