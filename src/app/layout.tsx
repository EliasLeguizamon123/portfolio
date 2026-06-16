import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Geist } from './ui/fonts'

const geist = Geist;

export const metadata: Metadata = {
    metadataBase: new URL('https://eliasleguizamon.dev'),
    title: {
        default: 'Elias Leguizamon | Software Engineer & Tech Lead',
        template: '%s | Elias Leguizamon',
    },
    description: 'Software Engineer & Tech Lead with 6+ years of experience building fullstack, mobile, and DevOps solutions. Open Source enthusiast based in Buenos Aires, Argentina.',
    keywords: ['Software Engineer', 'Tech Lead', 'Fullstack Developer', 'DevOps', 'React', 'React Native', 'Next.js', 'TypeScript', 'Rust', 'Open Source', 'Argentina'],
    openGraph: {
        type: 'website',
        locale: 'es_AR',
        title: 'Elias Leguizamon | Software Engineer & Tech Lead',
        description: 'Software Engineer & Tech Lead with 6+ years of experience building fullstack, mobile, and DevOps solutions.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Elias Leguizamon | Software Engineer & Tech Lead',
        description: 'Software Engineer & Tech Lead with 6+ years of experience building fullstack, mobile, and DevOps solutions.',
    },
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="es">
            <head>
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg+xml"
                />
            </head>
            <body className={geist.className}>
                <div className='bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]'>
                    {children}
                </div>
            </body>
        </html>
    )
}
