import { memo } from 'react'
import { certifications } from '../data/certifications'

const groups = [
    { id: 'alura', title: 'Alura / Oracle Next Education' },
    { id: 'dio', title: 'Digital Innovation One (DIO)' },
] as const

function Certifications() {
    return (
        <section id="certificacoes">
            <div className="container">
                <h2 className="section-title">Minhas <span>Certificações</span></h2>
                <div className="cert-grid">
                    {groups.map((g) => (
                        <div key={g.id} className="card">
                            <h3>{g.title}</h3>
                            <ul className="cert-list">
                                {certifications.filter((c) => c.institution === g.id).map((c) => (
                                    <li key={c.id}>
                                        <a href={c.file} target="_blank" rel="noreferrer" aria-label={`Certificado: ${c.title}`}>{c.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Certifications)
