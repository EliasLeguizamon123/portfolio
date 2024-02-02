import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Geist } from './ui/fonts'

const geist = Geist;

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
            <body className={geist.className}>
                {children}
            </body>
        </html>
    )
}
