/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#FFFFFF', // Surface
                'bg-secondary': '#F5F5F5', // Background
                'bg-tertiary': '#EEEEEE', // Slightly darker background
                'accent-primary': '#6200EE', // Primary - Deep Purple
                'accent-secondary': '#03DAC6', // Secondary - Teal
                'text-primary': '#121212', // High Emphasis
                'text-secondary': '#616161', // Medium Emphasis
                'text-muted': '#9E9E9E', // Disabled / Hint
                'glass-bg': 'rgba(255, 255, 255, 0.9)', // Kept for compatibility but made opaque
                'glass-border': 'rgba(0, 0, 0, 0.12)', // Light border
            },
            boxShadow: {
                'material-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                'material-2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                'material-3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                'material-4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
                'material-5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            }
        },
    },
    plugins: [],
}
