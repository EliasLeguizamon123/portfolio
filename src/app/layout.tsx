import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Geist } from './ui/fonts'

const geist = Geist;

export const metadata: Metadata = {
    title: 'Elias Leguizamon',
    description: 'Created with love by Elias Leguizamon',
    icons: {
        icon: '/icon.png',
    }
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* <link rel="icon" type="image/svg+xml" href="/icon.png" /> */}
            </head>
            <body className={geist.className}>
                <div className='bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]'>
                    {children}
                </div>
            </body>
        </html>
    )
}
