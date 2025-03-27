import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Барахолка',
	description: 'Самая большая коллекция вещей!',
	icons: {
		icon: '/favicon.svg',
		shortcut: '/favicon.svg',
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex  items-center justify-center antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
