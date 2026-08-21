import { useMemo, useState } from 'react'

export default function Contact() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    const assunto = useMemo(() => encodeURIComponent(`Contato pelo portfólio - ${nome}`), [nome])
    const corpo = useMemo(() => encodeURIComponent(`E-mail: ${email}\n\n${mensagem}`), [email, mensagem])

    return (
        <section id="contato">
            <div className="container">
                <h2 className="section-title">Fale <span>Comigo</span></h2>
                <div className="contact-grid">
                    <div className="card">
                        <h3>Redes sociais</h3>
                        <ul className="contact-list">
                            <li><a href="mailto:zefpedro@hotmail.com" aria-label="E-mail de Pedro">E-mail</a></li>
                            <li><a href="https://www.linkedin.com/in/pedro-zeferino-da-silva-625394330/" target="_blank" rel="noreferrer" aria-label="LinkedIn de Pedro">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/pedrozeferino5925/" target="_blank" rel="noreferrer" aria-label="Instagram de Pedro">Instagram</a></li>
                            <li><a href="https://discord.com/users/966047825790115881" target="_blank" rel="noreferrer" aria-label="Discord de Pedro">Discord</a></li>
                            <li><a href="https://onlinecurriculo.com.br/r/ymyltlHY2" target="_blank" rel="noreferrer" aria-label="Currículo de Pedro">Meu Currículo</a></li>
                        </ul>
                    </div>
                    <form
                        className="card contact-form"
                        aria-label="Formulário de contato"
                        action={`mailto:zefpedro@hotmail.com?subject=${assunto}&body=${corpo}`}
                        method="get"
                    >
                        <label htmlFor="nome">Nome</label>
                        <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        <label htmlFor="email">E-mail</label>
                        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
                        <button type="submit" className="btn btn-primary">Enviar e-mail</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
