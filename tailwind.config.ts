// import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'gunmetal': '#292F36',
                'pantone': "#FF5C00",
                'gunmetal-blue': "#002633",
                'lavender': "#DDDDE8",
            },
        },
    },
    plugins: [
        plugin(function({ addVariant } : any){
            addVariant('hocus', ['&:hover', '&:focus'])
            addVariant('hactive', ['&:active', '&:hover'])
        })
    ]
}
