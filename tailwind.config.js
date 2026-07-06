/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-color)",
                foreground: "var(--text-primary)",
                secondary: "var(--text-secondary)",
                border: "var(--border-color)",
                accent: "var(--accent)",
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'sans-serif'],
                serif: ['var(--font-serif)', 'serif'],
            },
            spacing: {
                'nav': 'var(--nav-height)',
                'container': 'var(--container-padding)',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(calc(-100% / 4))' }, // Divided by 4 because we duplicated children 4 times
                },
                marqueeReverse: {
                    '0%': { transform: 'translateX(calc(-100% / 4))' },
                    '100%': { transform: 'translateX(0%)' },
                }
            },
            animation: {
                'marquee': 'marquee linear infinite',
                'marquee-reverse': 'marqueeReverse linear infinite',
            }
        },
    },
    plugins: [],
}
