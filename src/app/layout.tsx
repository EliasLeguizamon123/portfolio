import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Elias Leguizamon',
    description: 'Created with love by Elias Leguizamon',
    icons: [
        { rel: 'icon', url: 'icon.ico' },
        { rel: 'favicon', url: 'icon.ico' }
    ]
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
