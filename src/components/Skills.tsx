import { memo } from 'react'
import { skillGroups } from '../data/skills'

function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <h2 className="section-title">Skills & <span>Tecnologias</span></h2>
                <div className="skills-grid">
                    {skillGroups.map((g) => (
                        <div key={g.id} className="card">
                            <h3>{g.emoji} {g.title}</h3>
                            <div className="skill-badges">
                                {g.skills.map((s) => (
                                    <a key={s.name} href={s.badge} target="_blank" rel="noreferrer" aria-label={s.name}>
                                        <img src={s.badge} alt={s.name} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Skills)
