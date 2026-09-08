import './Resume.css'
import { Link } from 'react-router-dom'

const experience = [
  {
    period: '2023 — 2025',
    company: 'Universal Orlando Resort',
    role: 'Security Operations / Systems Support',
    description:
      'Collaborated with Universal Creative, engineering teams, operations, and cross-functional stakeholders to support the delivery, safety, and operational readiness of Epic Universe, a $7 billion infrastructure project, incorporating stakeholder feedback to improve processes and operational outcomes.',
    skills: ['Operations', 'Access Control', 'Systems', 'Documentation'],
  },
  {
    period: '2023',
    company: 'Asurion / Verizon',
    role: 'Technical Support',
    description:
      'Provided customer-facing technical troubleshooting, device support, account assistance, and structured problem resolution across mobile technology environments.',
    skills: ['Technical Support', 'Troubleshooting', 'Customer Experience'],
  },
  {
    period: 'Previous Experience',
    company: 'Financial Services & Technology',
    role: 'Digital Support / Client Services',
    description:
      'Supported customers across digital banking, insurance, technology, and service environments while developing experience in risk awareness, client communication, and process execution.',
    skills: ['Digital Systems', 'Risk', 'Client Services', 'Process Improvement'],
  },
]

const skills = [
  'React',
  'TypeScript',
  'Java',
  'Spring Boot',
  'PostgreSQL',
  'C++',
  'Python',
  'REST APIs',
  'Git',
  'GitHub Actions',
  'Docker',
  'Linux',
  'PowerShell',
  'SQL',
  'Systems Engineering',
  'Technical Documentation',
]

function Resume() {
  return (
    <main className="resume-page">

      {/* HERO */}
      <section className="resume-hero">
        <span className="resume-eyebrow">ENGINEERING / RESUME</span>

        <div className="resume-hero-grid">
          <div>
            <h1>
              Logan
              <br />
              Foster.
            </h1>

            <p>
              Computer engineering professional focused on software,
              systems, technical operations, and solving complex problems
              through structured engineering approaches.
            </p>
          </div>

          <div className="resume-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="resume-primary-button"
            >
              View PDF Resume
            </a>

            <Link
              to="/contact"
              className="resume-secondary-button"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* PROFILE */}
      <section className="resume-section resume-profile">
        <div>
          <span className="resume-section-label">01 / PROFILE</span>
        </div>

        <div>
          <h2>
            Engineering mindset.
            <br />
            Operational experience.
          </h2>

          <p className="resume-large-copy">
            My background combines software development, technical support,
            systems thinking, customer-facing technology, and high-volume
            operational environments.
          </p>

          <p>
            I am particularly interested in opportunities where software,
            infrastructure, data, automation, and real-world systems come
            together. My current work focuses on building full-stack
            applications and expanding hands-on engineering projects.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="resume-section">
        <div>
          <span className="resume-section-label">02 / EXPERIENCE</span>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <span>{item.company}</span>
              </div>

              <h3>{item.role}</h3>

              <p>{item.description}</p>

              <div className="resume-tags">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="resume-section">
        <div>
          <span className="resume-section-label">03 / TECHNICAL STACK</span>
        </div>

        <div>
          <h2>Tools I work with.</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="resume-section">
        <div>
          <span className="resume-section-label">04 / EDUCATION</span>
        </div>

        <div className="education-block">
          <span>University of Central Florida</span>

          <h2>Computer Engineering</h2>

          <p>
            Coursework and independent study focused on programming,
            mathematics, computer systems, engineering fundamentals,
            software development, and technical problem solving.
          </p>
        </div>
      </section>

      {/* CURRENT ENGINEERING WORK */}
      <section className="resume-section">
        <div>
          <span className="resume-section-label">05 / CURRENT WORK</span>
        </div>

        <div>
          <h2>Building beyond the résumé.</h2>

          <div className="current-work-grid">
            <div>
              <span>01</span>
              <h3>Engineering Platform</h3>
              <p>
                React, Spring Boot, PostgreSQL, cloud deployment,
                CI/CD, APIs, and production infrastructure.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Flight Control</h3>
              <p>
                C++ systems experimentation focused on control loops,
                telemetry, fault handling, and deterministic behavior.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>SafeRoute</h3>
              <p>
                Navigation and safety concept combining routing,
                transportation data, and real-world constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="resume-contact">
        <span className="resume-section-label">06 / CONTACT</span>

        <h2>
          Interested in working
          <br />
          together?
        </h2>

        <p>
          I am open to engineering, software, systems, technology,
          and technical leadership opportunities.
        </p>

        <Link to="/contact" className="resume-primary-button">
          Start a Conversation →
        </Link>
      </section>

    </main>
  )
}

export default Resume