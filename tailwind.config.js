/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-light': 'var(--color-primary-light)',
                'primary-dark': 'var(--color-primary-dark)',

                secondary: 'var(--color-secondary)',
                'secondary-light': 'var(--color-secondary-light)',

                accent: 'var(--color-accent)',
                'accent-light': 'var(--color-accent-light)',

                background: 'var(--color-background)',
                surface: 'var(--color-surface)',
                'surface-hover': 'var(--color-surface-hover)',

                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',

                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
                info: 'var(--color-info)',

                'dark-background': 'var(--color-dark-background)',
                'dark-surface': 'var(--color-dark-surface)',
                'dark-surface-hover': 'var(--color-dark-surface-hover)',
                'dark-text-primary': 'var(--color-dark-text-primary)',
                'dark-text-secondary': 'var(--color-dark-text-secondary)',
                'dark-text-tertiary': 'var(--color-dark-text-tertiary)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
}
