import { memo } from 'react'
import { projects } from '../data/projects'

function Projects() {
    return (
        <section id="projetos">
            <div className="container">
                <h2 className="section-title">Meus <span>Projetos</span></h2>
                <div className="projects-grid">
                    {projects.map((p) => (
                        <article key={p.id} className="card project-card">
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                            <div className="project-badges">
                                {p.badges.map((b, i) => (
                                    <img key={i} src={b} alt={p.stack[i]} />
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn" aria-label={`Código fonte de ${p.name}`}>Código</a>
                                {p.demoUrl && (
                                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary" aria-label={`Demo de ${p.name}`}>Demo</a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Projects)
