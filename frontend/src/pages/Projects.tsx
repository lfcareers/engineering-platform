import './Projects.css'

const projects = [
  {
    id: 'sentinel-security',
    number: '01',
    title: 'Sentinel Security',
    status: 'LIVE',
    description:
        'A deployed endpoint security and telemetry platform with authenticated ingestion, persistent alert analytics, real-time event streaming, and operational visibility.',
    technologies: ['Rust', 'Spring Boot', 'React', 'PostgreSQL', 'Kafka'],
    href: 'https://sentinel.loganfoster.net',
    source: 'https://github.com/lfcareers/sentinel-security',
  },
  {
    id: 'flight-control',
    number: '02',
    title: 'Embedded Flight Controller Design',
    status: 'IN DEVELOPMENT',
    description:
        'A C++ embedded flight-control project focused on deterministic control loops, telemetry, fault handling, and system validation.',
    technologies: ['C++', 'Embedded Systems', 'Control Systems'],
    href: '#flight-control',
  },
  {
    id: 'engineering-platform',
    number: '03',
    title: 'Engineering Platform',
    status: 'LIVE',
    description:
        'The full-stack engineering platform behind LoganFoster.net, connecting React, Spring Boot, PostgreSQL, APIs, CI/CD, and cloud infrastructure.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'CI/CD'],
    href: 'https://loganfoster.net',
    source: 'https://github.com/lfcareers/engineering-platform',
  },
]

function Projects() {
  return (
    <main className="projects-page">

      {/* HEADER */}
      <section className="projects-hero">
        <span className="projects-eyebrow">ENGINEERING / PROJECTS</span>

        <h1>
          Building systems
          <br />
          with purpose.
        </h1>

        <p>
          Software, systems, data, and engineering projects built to
          explore real problems through measurable and testable solutions.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
            className="project-card"
          >
            <div className="project-card-visual">
              <span>{project.number}</span>

              <div className="project-card-overlay">
                <span>EXPLORE PROJECT →</span>
              </div>
            </div>

            <div className="project-card-content">
              <div className="project-card-meta">
                <span>{project.status}</span>
                <span>{project.number}</span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* PROJECT BREAKDOWNS */}
      {projects.map((project) => (
        <section
          key={project.id}
          id={project.id}
          className="project-breakdown"
        >
          <div className="project-breakdown-number">
            {project.number}
          </div>

          <div className="project-breakdown-content">
            <span className="project-status">{project.status}</span>

            <h2>{project.title}</h2>

            <p className="project-lead">
              {project.description}
            </p>

            <div className="project-details-grid">
              <div>
                <span className="detail-label">FOCUS</span>
                <p>
                  Engineering design, implementation, testing,
                  documentation, and iterative improvement.
                </p>
              </div>

              <div>
                <span className="detail-label">TECHNOLOGY</span>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-actions">
              <a
                  href={project.href}
                  target={project.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                View Project
              </a>

              {project.source ? (
                  <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-action"
                  >
                    View Source
                  </a>
              ) : (
                  <a
                      href={`#${project.id}`}
                      className="secondary-action"
                  >
                    Architecture
                  </a>
              )}
            </div>
          </div>
        </section>
      ))}

    </main>
  )
}

export default Projects