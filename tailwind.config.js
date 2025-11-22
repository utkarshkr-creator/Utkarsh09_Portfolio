/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': 'hsl(250, 20%, 10%)',
                'bg-secondary': 'hsl(250, 20%, 13%)',
                'bg-tertiary': 'hsl(250, 20%, 16%)',
                'accent-primary': 'hsl(280, 80%, 65%)',
                'accent-secondary': 'hsl(250, 80%, 65%)',
                'text-primary': 'hsl(250, 10%, 95%)',
                'text-secondary': 'hsl(250, 10%, 80%)',
                'text-muted': 'hsl(250, 10%, 60%)',
                'glass-bg': 'hsla(250, 20%, 15%, 0.7)',
                'glass-border': 'hsla(250, 20%, 90%, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'blink': 'blink 1s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
