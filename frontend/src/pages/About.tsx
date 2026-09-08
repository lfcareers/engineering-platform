import './About.css'

const timeline = [
  {
    number: '01',
    title: 'Started with technology',
    text:
      'My interest in engineering grew from working with computers, devices, networks, and technical problem solving. Over time, that interest expanded into software development, systems thinking, and building tools that solve real-world problems.',
  },
  {
    number: '02',
    title: 'Learned through operations',
    text:
      'Working in high-volume environments taught me how systems behave under pressure. Safety, communication, access control, incident response, and coordination all reinforced the importance of reliability, process, and clear decision making.',
  },
  {
    number: '03',
    title: 'Moved deeper into engineering',
    text:
      'I began focusing more heavily on software, APIs, databases, automation, and full-stack development while continuing to build on my computer engineering background.',
  },
  {
    number: '04',
    title: 'Building forward',
    text:
      'Today I am focused on creating engineering projects that combine software, systems, data, and real-world utility. This site is the hub for that work and will continue evolving as new experiments become full applications.',
  },
]

const principles = [
  'Solve useful problems',
  'Design for reliability',
  'Test assumptions',
  'Document decisions',
  'Keep learning',
  'Build iteratively',
]

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <span className="about-eyebrow">ABOUT / LOGAN FOSTER</span>

        <h1>
          Engineer by
          <br />
          curiosity.
        </h1>

        <p>
          I am interested in the point where software, systems,
          infrastructure, operations, and real-world problems meet.
        </p>
      </section>

      {/* INTRO */}
      <section className="about-intro">
        <div>
          <span className="about-label">01 / WHO I AM</span>
        </div>

        <div>
          <h2>
            Building technical depth
            through real experience.
          </h2>

          <p className="about-large-copy">
            My background has never followed a single narrow path.
            I have worked across technology, technical support,
            operations, security, customer-facing systems, and engineering.
          </p>

          <p>
            That variety shaped the way I approach problems today.
            I tend to think in terms of systems: how components interact,
            where failure can occur, how users experience a process,
            and how technology can make that process more reliable.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-section">
        <div>
          <span className="about-label">02 / JOURNEY</span>
        </div>

        <div className="about-timeline">
          {timeline.map((item) => (
            <article className="timeline-item" key={item.number}>
              <span className="timeline-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section className="about-section">
        <div>
          <span className="about-label">03 / APPROACH</span>
        </div>

        <div>
          <h2>How I like to work.</h2>

          <div className="principles-grid">
            {principles.map((principle, index) => (
              <div className="principle-card" key={principle}>
                <span>
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{principle}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="about-section">
        <div>
          <span className="about-label">04 / CURRENT FOCUS</span>
        </div>

        <div>
          <h2>What I am building toward.</h2>

          <div className="focus-grid">
            <div>
              <span>SOFTWARE</span>
              <p>
                Full-stack applications, APIs, backend systems,
                automation, and production-ready web platforms.
              </p>
            </div>

            <div>
              <span>SYSTEMS</span>
              <p>
                Control systems, simulation, infrastructure,
                reliability, and technical architecture.
              </p>
            </div>

            <div>
              <span>DATA</span>
              <p>
                Data-driven applications, visualization,
                routing, analytics, and decision support.
              </p>
            </div>

            <div>
              <span>PRODUCT</span>
              <p>
                Turning engineering experiments into useful,
                understandable, and potentially scalable applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-philosophy">
        <span className="about-label">05 / PHILOSOPHY</span>

        <blockquote>
          Good engineering should make complicated systems
          easier to understand, operate, and improve.
        </blockquote>

        <p>
          That principle influences how I approach both software
          and real-world systems.
        </p>
      </section>

      {/* CTA */}
      <section className="about-contact">
        <span className="about-label">06 / NEXT</span>

        <h2>
          Build something
          <br />
          worth solving.
        </h2>

        <p>
          I am always interested in thoughtful engineering problems,
          technical collaboration, and opportunities to build useful systems.
        </p>

        <div className="about-actions">
          <a href="/projects" className="about-primary-button">
            Explore Projects →
          </a>

          <a href="/contact" className="about-secondary-button">
            Contact Me
          </a>
        </div>
      </section>

    </main>
  )
}

export default About