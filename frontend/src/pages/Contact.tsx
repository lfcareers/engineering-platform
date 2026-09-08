import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('Contact form:', formData)
  }

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <span className="contact-eyebrow">
          CONTACT / START A CONVERSATION
        </span>

        <h1>
          Let's build
          <br />
          something useful.
        </h1>

        <p>
          Engineering opportunities, technical collaboration,
          interesting projects, or simply a good problem worth solving.
        </p>
      </section>

      {/* CONTACT AREA */}
      <section className="contact-main">

        {/* LEFT SIDE */}
        <div className="contact-information">

          <span className="contact-label">01 / CONTACT</span>

          <h2>
            Have something
            in mind?
          </h2>

          <p>
            Use the form to start a conversation. I'm interested in
            software engineering, systems, technical projects,
            collaboration, and opportunities to build meaningful technology.
          </p>

          <div className="contact-details">

            <div>
              <span>LOCATION</span>
              <p>Orlando, Florida</p>
            </div>

            <div>
              <span>INTERESTS</span>
              <p>
                Software • Systems • Data • Automation
              </p>
            </div>

            <div>
              <span>AVAILABILITY</span>
              <p>
                Open to engineering opportunities and collaboration
              </p>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              NAME
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              EMAIL
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">
              ORGANIZATION
            </label>

            <input
              id="organization"
              name="organization"
              type="text"
              placeholder="Company or organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              WHAT WOULD YOU LIKE TO DISCUSS?
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">
                Select a topic
              </option>

              <option value="engineering">
                Engineering Opportunity
              </option>

              <option value="collaboration">
                Project Collaboration
              </option>

              <option value="technical">
                Technical Discussion
              </option>

              <option value="business">
                Business / Product
              </option>

              <option value="other">
                Something Else
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              MESSAGE
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Tell me a little about what you're working on..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-footer">
            <p>
              Your information will only be used to respond
              to your message.
            </p>

            <button type="submit">
              Send Message →
            </button>
          </div>

        </form>

      </section>

      {/* OTHER PATHS */}
      <section className="contact-paths">

        <span className="contact-label">
          02 / EXPLORE
        </span>

        <h2>
          Not ready to reach out?
        </h2>

        <div className="contact-path-grid">

          <a href="/projects">
            <span>01</span>
            <h3>Projects</h3>
            <p>
              Explore software, systems, and engineering work.
            </p>
            <strong>Explore →</strong>
          </a>

          <a href="/engineering-lab">
            <span>02</span>
            <h3>Engineering Lab</h3>
            <p>
              See experiments, prototypes, and technical ideas.
            </p>
            <strong>Enter Lab →</strong>
          </a>

          <a href="/resume">
            <span>03</span>
            <h3>Resume</h3>
            <p>
              Review experience, technologies, and current work.
            </p>
            <strong>View Resume →</strong>
          </a>

        </div>

      </section>

    </main>
  )
}

export default Contact