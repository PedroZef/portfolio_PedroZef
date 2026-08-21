import ThemeToggle from './ThemeToggle'

const links = [
    { href: '#projetos', label: 'Projetos' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificacoes', label: 'Certificações' },
    { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container navbar-inner">
                <a href="#topo" className="navbar-logo" aria-label="Início">PZ</a>
                <ul className="navbar-links">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href}>{l.label}</a>
                        </li>
                    ))}
                    <li>
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
