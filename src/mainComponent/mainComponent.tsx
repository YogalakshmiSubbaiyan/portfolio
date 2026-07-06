import './mainComponent.css'

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Product-focused teams',
    period: '2023 — Present',
    bullets: [
      'Design and ship modern React interfaces for high-impact products.',
      'Improve performance, accessibility, and maintainability across shared UI systems.',
      'Work closely with design and product to turn complex flows into simple experiences.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Finance & data platforms',
    period: '2020 — 2023',
    bullets: [
      'Built dashboards, automation tools, and internal applications used daily by teams.',
      'Connected front-end experiences with robust APIs and thoughtful UX patterns.',
      'Delivered reliable features in fast-moving, deadline-driven projects.'
    ]
  }
]

const projects = [
  {
    title: 'Operations Dashboard',
    summary: 'A real-time analytics workspace for monitoring team performance and workflows.',
    stack: ['React', 'TypeScript', 'Charts']
  },
  {
    title: 'Client Portal',
    summary: 'An elegant portal that simplified onboarding, service requests, and account actions.',
    stack: ['Angular', 'Node.js', 'REST APIs']
  }
]
export default function MainComponent() {
  return (
    <div className="mainComponent">
      <section className="hero-section">
        <div className="hero-copy">
          <h1>I build frontends that ship.</h1>
          <p className="hero-text">
            I’m Yogalakshmi Subbaiyan, a full-stack developer focused on creating clean, user-centered interfaces that make complex products feel effortless.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">See projects</a>
            <a href="mailto:yoga.subbaiyan@gmail.com" className="secondary-btn">Let’s talk</a>
          </div>
          <div className="hero-stats">
            <span className="stat-pill">React</span>
            <span className="stat-pill">TypeScript</span>
            <span className="stat-pill">UI Systems</span>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About</h2>
        <p>
          I enjoy turning ideas into usable, polished web experiences. My work blends strong engineering habits with an eye for detail, creating products that are both performant and intuitive. I enjoy collaborating with cross-functional teams, solving complex problems, and continuously learning new technologies to build better digital experiences.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll probably find me exploring my creative side through pottery, painting, and various arts and crafts. I&apos;m naturally a creative person, and I enjoy bringing that same curiosity, attention to detail, and thoughtful design mindset into the products I build.
        </p>
      </section>

      <section id="experience" className="content-section">
        <h2>Experience</h2>
        <div className="experience-list">
          {experiences.map((item) => (
            <article key={item.role} className="experience-item">
              <div className="experience-header">
                <h3>{item.role}</h3>
                <span>{item.period}</span>
              </div>
              <p className="experience-company">{item.company}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>Selected work</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <h2>Get in touch</h2>
        <p>If you are building something ambitious and want a frontend partner who cares about detail, let’s connect.</p>
        <div className="hero-actions">
          <a href="mailto:yoga.subbaiyan@gmail.com" className="primary-btn">Email me</a>
          <a href="https://www.linkedin.com/in/yogalakshmi-yoga-subbaiyan-a5181094/" target="_blank" rel="noreferrer" className="secondary-btn">LinkedIn</a>
        </div>
      </section>
    </div>
  )
}