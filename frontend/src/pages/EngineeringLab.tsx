import './EngineeringLab.css'

const labs = [
  {
    number: '01',
    title: 'AI Assistant Lab',
    status: 'PLANNED',
    description:
      'A space for experimenting with conversational interfaces, retrieval, automation, and domain-specific assistants.',
    focus: ['Chatbots', 'AI', 'Automation'],
  },
  {
    number: '02',
    title: 'Simulation Playground',
    status: 'BUILDING',
    description:
      'Interactive engineering simulations focused on systems behavior, control logic, telemetry, and failure scenarios.',
    focus: ['Simulation', 'C++', 'Systems'],
  },
  {
    number: '03',
    title: 'Data Experiments',
    status: 'PLANNED',
    description:
      'Small data applications for exploring APIs, visualization, pattern recognition, and real-world decision support.',
    focus: ['Data', 'APIs', 'Visualization'],
  },
  {
    number: '04',
    title: 'Mini Games',
    status: 'PLANNED',
    description:
      'Compact browser-based games and interactive challenges designed to practice logic, state management, and UX.',
    focus: ['React', 'Logic', 'UX'],
  },
]

function EngineeringLab() {
  return (
    <main className="lab-page">

      <section className="lab-hero">
        <span className="lab-eyebrow">ENGINEERING / LAB</span>

        <h1>
          Test.
          <br />
          Break.
          <br />
          Improve.
        </h1>

        <p>
          The Engineering Lab is an evolving workspace for experiments,
          prototypes, simulations, data tools, AI systems, and interactive
          software.
        </p>
      </section>

      <section className="lab-intro">
        <div>
          <span className="lab-label">PURPOSE</span>

          <h2>
            A place to build before everything needs to be polished.
          </h2>
        </div>

        <p>
          Not every idea needs to begin as a full product. This lab provides
          room to explore concepts, test technical approaches, document what
          works, and turn promising experiments into larger projects.
        </p>
      </section>

      <section className="lab-grid">
        {labs.map((lab) => (
          <article className="lab-card" key={lab.number}>
            <div className="lab-card-top">
              <span>{lab.number}</span>
              <span className="lab-status">{lab.status}</span>
            </div>

            <h2>{lab.title}</h2>

            <p>{lab.description}</p>

            <div className="lab-tags">
              {lab.focus.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <button type="button">
              Open Lab →
            </button>
          </article>
        ))}
      </section>

      <section className="lab-workflow">
        <span className="lab-label">LAB WORKFLOW</span>

        <div className="workflow-row">
          <span>IDEA</span>
          <span>→</span>
          <span>PROTOTYPE</span>
          <span>→</span>
          <span>TEST</span>
          <span>→</span>
          <span>MEASURE</span>
          <span>→</span>
          <span>ITERATE</span>
        </div>
      </section>

      <section className="lab-roadmap">
        <div>
          <span className="lab-label">CURRENT ROADMAP</span>
          <h2>Experiments become systems.</h2>
        </div>

        <div className="roadmap-list">
          <div>
            <span>01</span>
            <p>Interactive chatbot experiments</p>
          </div>

          <div>
            <span>02</span>
            <p>Browser-based engineering simulations</p>
          </div>

          <div>
            <span>03</span>
            <p>Small games and logic challenges</p>
          </div>

          <div>
            <span>04</span>
            <p>API and data visualization experiments</p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default EngineeringLab