import { Button, Card, Chip } from '@heroui/react'

function Home() {
  return (
    <div className="home-page">

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">

          <Chip variant="soft">
            SOFTWARE • SYSTEMS • SECURITY • DATA
          </Chip>

          <h1>COMPUTER ENGINEER</h1>

          <p className="hero-description">
            I design and deploy software, security, and engineering
            systems that turn complex requirements into measurable,
            testable solutions.
          </p>

          <div className="hero-actions">
            <Button
              variant="primary"
              size="lg"
              onPress={() => {
                window.location.href = '/projects'
              }}
            >
              Explore My Work
            </Button>

            <Button
              variant="outline"
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

              <Chip
                size="sm"
                variant="soft"
              >
                ONLINE
              </Chip>
            </div>

            <div className="status-row">
              <span>Engineering Platform</span>
              <span>● Operational</span>
            </div>

            <div className="status-row">
              <span>Sentinel Security</span>
              <span>● Live</span>
            </div>

            <div className="status-row">
              <span>Management API</span>
              <span>● Operational</span>
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
          <span className="section-label">
            01 / SELECTED WORK
          </span>

          <h2>
            Engineering systems built beyond the prototype.
          </h2>
        </div>

        <div className="project-grid">

          {/* SENTINEL SECURITY */}
          <a
            href="https://sentinel.loganfoster.net"
            target="_blank"
            rel="noreferrer"
            className="project-card-link"
          >
            <Card>
              <div>
                <div className="project-card-meta">
                  <span className="project-number">01</span>

                  <Chip size="sm" variant="soft">
                    LIVE
                  </Chip>
                </div>

                <h3>Sentinel Security</h3>

                <p>
                  Endpoint security and telemetry platform with
                  authenticated ingestion, persistent alert analytics,
                  real-time event streaming, and operational visibility.
                </p>

                <div className="project-tags">
                  <Chip size="sm">Rust</Chip>
                  <Chip size="sm">Spring Boot</Chip>
                  <Chip size="sm">React</Chip>
                  <Chip size="sm">PostgreSQL</Chip>
                  <Chip size="sm">Kafka</Chip>
                </div>

                <p className="project-link">
                  Launch Sentinel →
                </p>
              </div>
            </Card>
          </a>


          {/* EMBEDDED FLIGHT CONTROLLER */}
          <a
            href="/projects#flight-control"
            className="project-card-link"
          >
            <Card>
              <div>
                <div className="project-card-meta">
                  <span className="project-number">02</span>

                  <Chip size="sm" variant="soft">
                    IN DEVELOPMENT
                  </Chip>
                </div>

                <h3>Embedded Flight Controller Design</h3>

                <p>
                  C++ embedded flight-control engineering focused on
                  deterministic control loops, telemetry, fault handling,
                  and system validation.
                </p>

                <div className="project-tags">
                  <Chip size="sm">C++</Chip>
                  <Chip size="sm">Embedded Systems</Chip>
                  <Chip size="sm">Control Systems</Chip>
                </div>

                <p className="project-link">
                  Explore Project →
                </p>
              </div>
            </Card>
          </a>


          {/* ENGINEERING PLATFORM */}
          <a
            href="/projects#engineering-platform"
            className="project-card-link"
          >
            <Card>
              <div>
                <div className="project-card-meta">
                  <span className="project-number">03</span>

                  <Chip size="sm" variant="soft">
                    LIVE
                  </Chip>
                </div>

                <h3>Engineering Platform</h3>

                <p>
                  The full-stack platform behind LoganFoster.net,
                  integrating React, Spring Boot, PostgreSQL, APIs,
                  CI/CD, and cloud infrastructure.
                </p>

                <div className="project-tags">
                  <Chip size="sm">React</Chip>
                  <Chip size="sm">Spring Boot</Chip>
                  <Chip size="sm">PostgreSQL</Chip>
                  <Chip size="sm">CI/CD</Chip>
                </div>

                <p className="project-link">
                  Explore Platform →
                </p>
              </div>
            </Card>
          </a>

        </div>

      </section>
      {/* ENGINEERING APPROACH */}
      <section className="content-section approach-section">

        <div className="section-heading">
          <span className="section-label">
            02 / ENGINEERING APPROACH
          </span>

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

        <span className="section-label">
          03 / CONTACT
        </span>

        <h2>
          Have a difficult engineering problem?
        </h2>

        <p>
          I'm interested in building systems that solve
          meaningful problems.
        </p>

        <Button
          variant="primary"
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