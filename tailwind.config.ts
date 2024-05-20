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
            animation: {
                "background-shine": "background-shine 2s linear infinite",
                "bounce": "bounce 1s infinite",
                "border-width": "border-width 3s infinite alternate",
            },
            keyframes: {
                "background-shine": {
                    '0%': {
                        "backgroundPosition": "0 0"
                    },
                    '100%': {
                        "backgroundPosition": "-200% 0"
                    }
                },
                "bounce": {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
                    }
                },
                "border-width": {
                    "from": {
                        width: "10px",
                        opacity: "0.3"
                    },
                    "to": {
                        width: "80%",
                        opacity: "1"
                    }
                }
            }
        }
    },
    plugins: [
        plugin(function({ addVariant } : { addVariant: any}) {
            addVariant('hocus', ['&:hover', '&:focus'])
            addVariant('hactive', ['&:active', '&:hover'])
        })
    ]
}
