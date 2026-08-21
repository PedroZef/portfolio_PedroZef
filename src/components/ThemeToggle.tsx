import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') !== 'light'
        }
        return true
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
        localStorage.setItem('theme', dark ? 'dark' : 'light')
    }, [dark])

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
        >
            {dark ? '☀️' : '🌙'}
        </button>
    )
}
