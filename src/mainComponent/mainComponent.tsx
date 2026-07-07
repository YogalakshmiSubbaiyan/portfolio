import './mainComponent.css'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const experiences = [
  {
    role: 'Software Engineer II-A',
    company: 'Bank of America Continuum India, Chennai',
    period: 'MAR 2022 — Present',
    bullets: [
      'Developed and optimized core front-end components for multiple Bank of America applications, improving scalability and user experience.',
      'Built a reusable Angular UI component library with responsive design and WCAG 2.1 accessibility standards.',
      'Led a virtual assistant initiative that improved search capabilities and developer portal effectiveness, saving the company half a million dollars.',
      'Received a Silver Award for consistent upskilling and learning-sharing, and multiple Bronze Awards for training and cross-functional growth.'
    ]
  },
  {
    role: 'Developer Associate',
    company: 'Cognizant Technology Solutions, Chennai',
    period: 'SEP 2019 — MAR 2022',
    bullets: [
      'Developed an end-to-end review process for trust funds for Strategic Fundraising Plan (SFP), improving efficiency and impact.',
      'Built an Angular 8 application for Call of Funds (COF) to send installment reminders to donors, approved for the planning cycle.'
    ]
  },
  {
    role: 'IT Analyst',
    company: 'Tata Consultancy Services, Trivandrum & Chennai',
    period: 'MAY 2015 — AUG 2019',
    bullets: [
      'Developed a Tax Reporting System (TRS) using AngularJS to help bank associates search and manage transactions at account and statement levels.',
      'Created a C#-based middleware TRS application to track, monitor, and view bank transaction details.',
      'Built an AngularJS application to convert IRS files for bulk upload into a database through SFTP.',
      'Designed Access Control Management Engine (ACME) to provision roles and entitlements efficiently across bank applications.'
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
          <div className="hero-stats">
            <span className="stat-pill">React</span>
            <span className="stat-pill">TypeScript & Javascript</span>
            <span className="stat-pill">UI Systems</span>
            <span className="stat-pill">Angular</span>
            <span className="stat-pill">HTML5 & CSS3</span>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About</h2>
        <p>
          I enjoy turning ideas into usable, refined web experiences. My work blends strong engineering habits with an eye for detail, creating products that are both performant and intuitive. I enjoy collaborating with cross-functional teams, solving complex problems, and continuously learning new technologies to build better digital experiences.
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

      <section id="skills" className="content-section">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skills-group">
            <h3>Frontend Systems</h3>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Vue.js</span>
              <span>Angular</span>
              <span>Storybook</span>
            </div>
          </div>

          <div className="skills-group">
            <h3>Backend</h3>
            <div className="skills-list">
              <span>Node.js</span>
              <span>REST</span>
              <span>GraphQL</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skills-group">
            <h3>Tooling &amp; DX</h3>
            <div className="skills-list">
              <span>Vite</span>
              <span>Webpack</span>
              <span>Vitest</span>
              <span>ESLint</span>
              <span>Prettier</span>
              <span>Figma</span>
            </div>
          </div>
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
        <div className="contact-links">
          <a href="/Yogalakshmi-Resume.pdf" target="_blank" rel="noreferrer" className="contact-link">
            <FaDownload />
            <span>Resume</span>
          </a>
          <a href="https://github.com/YogalakshmiSubbaiyan" target="_blank" rel="noreferrer" className="contact-link">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yogalakshmi-subbaiyan-a5181094/" target="_blank" rel="noreferrer" className="contact-link">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  )
}