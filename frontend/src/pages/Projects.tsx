import './Projects.css'

const projects = [
  {
    id: 'flight-control',
    number: '01',
    title: 'Real-Time Flight Control',
    status: 'IN DEVELOPMENT',
    description:
      'A C++ control-loop simulation focused on deterministic behavior, telemetry, fault handling, and system testing.',
    technologies: ['C++', 'Simulation', 'Systems'],
  },
  {
    id: 'engineering-platform',
    number: '02',
    title: 'Engineering Platform',
    status: 'LIVE',
    description:
      'A full-stack engineering platform connecting React, Spring Boot, PostgreSQL, APIs, CI/CD, and cloud infrastructure.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
  },
  {
    id: 'saferoute',
    number: '03',
    title: 'SafeRoute',
    status: 'PROTOTYPE',
    description:
      'A safety-weighted navigation platform designed around routing algorithms, transportation data, and real-world constraints.',
    technologies: ['GPS', 'Routing', 'Data'],
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
            href={`#${project.id}`}
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
              <button type="button">
                View Project
              </button>

              <button
                type="button"
                className="secondary-action"
              >
                Architecture
              </button>
            </div>
          </div>
        </section>
      ))}

    </main>
  )
}

export default Projects