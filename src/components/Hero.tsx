const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-zeferino-da-silva-625394330/' },
    { label: 'Instagram', href: 'https://www.instagram.com/pedrozeferino5925/' },
    { label: 'Discord', href: 'https://discord.com/users/966047825790115881' },
    { label: 'Currículo', href: 'https://onlinecurriculo.com.br/r/ymyltlHY2' },
]

export default function Hero() {
    return (
        <header id="topo" className="hero">
            <div className="container hero-inner">
                <p className="hero-eyebrow">Olá, eu sou</p>
                <h1>Pedro Zeferino da Silva</h1>
                <p className="hero-role">Desenvolvedor Front-End Junior 🚀</p>
                <p className="hero-sub">
                    React.js · TypeScript · Java · IA Generativa — construindo interfaces
                    modernas e aprendendo todos os dias.
                </p>
                <div className="hero-actions">
                    <a href="#projetos" className="btn btn-primary">Ver projetos</a>
                    <a href="#contato" className="btn">Fale comigo</a>
                </div>
                <ul className="hero-socials">
                    {socials.map((s) => (
                        <li key={s.label}>
                            <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>{s.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
