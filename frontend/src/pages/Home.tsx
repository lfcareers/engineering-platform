import { Button, Card, Chip } from '@heroui/react'

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">

          <Chip variant="flat">
            SOFTWARE • SYSTEMS • DATA • AUTOMATION
          </Chip>

          <h1>COMPUTER ENGINEER</h1>

          <p className="hero-description">
            I build software and engineering systems that turn
            complex requirements into measurable, testable solutions.
          </p>

          <div className="hero-actions">
            <Button
              color="primary"
              size="lg"
              onPress={() => {
                window.location.href = '/projects'
              }}
            >
              Explore My Work
            </Button>

            <Button
              variant="bordered"
              size="lg"
              onPress={() => {
                window.location.href = '/resume'
              }}
            >
              View Resume
            </Button>
          </div>

        </div>

        {/* SYSTEM STATUS */}
        <Card>
            <div>
            <div className="status-header">
              <span>SYSTEM STATUS</span>
              <Chip size="sm" color="success" variant="flat">
                ONLINE
              </Chip>
            </div>

            <div className="status-row">
              <span>Frontend</span>
              <span>● Operational</span>
            </div>

            <div className="status-row">
              <span>Backend</span>
              <span>● Operational</span>
            </div>

            <div className="status-row">
              <span>Database</span>
              <span>● Connected</span>
            </div>

            <div className="status-row">
              <span>Engineering Lab</span>
              <span>○ Building</span>
            </div>

          </div>
        </Card>

      </section>


      {/* SELECTED WORK */}
      <section className="content-section">

        <div className="section-heading">
          <span className="section-label">01 / SELECTED WORK</span>
          <h2>Engineering projects with a purpose.</h2>
        </div>

        <div className="project-grid">

          <Card>
            <div>
              <span className="project-number">01</span>

              <h3>Real-Time Flight Control</h3>

              <p>
                C++ control-loop simulation focused on
                deterministic behavior, telemetry, fault handling,
                and system testing.
              </p>

              <div className="project-tags">
                <Chip size="sm">C++</Chip>
                <Chip size="sm">Simulation</Chip>
                <Chip size="sm">Systems</Chip>
              </div>
            </div>
          </Card>


          <Card>
            <div>
              <span className="project-number">02</span>

              <h3>Engineering Platform</h3>

              <p>
                A full-stack engineering environment connecting
                React, Spring Boot, PostgreSQL, APIs, automation,
                and future engineering applications.
              </p>

              <div className="project-tags">
                <Chip size="sm">React</Chip>
                <Chip size="sm">Spring Boot</Chip>
                <Chip size="sm">PostgreSQL</Chip>
              </div>
            </div>
          </Card>


          <Card>
            <div>
              <span className="project-number">03</span>

              <h3>SafeRoute</h3>

              <p>
                A safety-weighted navigation concept combining
                GPS, routing algorithms, transportation data,
                and real-world constraints.
              </p>

              <div className="project-tags">
                <Chip size="sm">GPS</Chip>
                <Chip size="sm">Routing</Chip>
                <Chip size="sm">Data</Chip>
              </div>
            </div>
          </Card>

        </div>

      </section>


      {/* ENGINEERING APPROACH */}
      <section className="content-section approach-section">

        <div className="section-heading">
          <span className="section-label">02 / ENGINEERING APPROACH</span>
          <h2>Build with intent.</h2>
        </div>

        <div className="engineering-process">

          <span>DEFINE</span>
          <span>→</span>
          <span>DESIGN</span>
          <span>→</span>
          <span>BUILD</span>
          <span>→</span>
          <span>TEST</span>
          <span>→</span>
          <span>DOCUMENT</span>
          <span>→</span>
          <span>IMPROVE</span>

        </div>

      </section>


      {/* CTA */}
      <section className="contact-section">

        <span className="section-label">03 / CONTACT</span>

        <h2>
          Have a difficult engineering problem?
        </h2>

        <p>
          I'm interested in building systems that solve
          meaningful problems.
        </p>

        <Button
          color="primary"
          size="lg"
          onPress={() => {
            window.location.href = '/contact'
          }}
        >
          Let's Talk
        </Button>

      </section>

    </div>
  )
}

export default Home