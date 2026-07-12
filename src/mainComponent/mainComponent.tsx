import './mainComponent.css'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'

const experiences = [
  {
    role: 'Software Engineer II-A',
    company: 'Bank of America Continuum India, Chennai',
    period: 'MAR 2022 — Present',
    bullets: [
      'Architected and scaled core front-end UI systems across enterprise banking portfolios, drastically reducing component re-render overhead and elevating cross-team delivery efficiency.',
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
    title: 'Spotlight | Enterprise Event Analytics Portal',
    summary: 'An enterprise-grade analytics portal designed for venue managers to monitor real-time revenue streams, track ticket sales, and manipulate large transactional datasets. Engineered for performance, it utilizes dynamic data streams, debounced asynchronous filtering, and complete URL-driven state synchronization to ensure a seamless dashboard experience.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    bullets:[
      'URL-Driven Filter State: Syncs all search inputs, status tags, and sorting metrics directly to browser query parameters using React Router, allowing recruiters to bookmark or share an exact filtered data view.',
      'Performance Optimization Layers: Implements data debouncing, skeleton loaders, and a mock asynchronous data architecture to eliminate layout shifts and handle dense transactional event tracking efficiently.'
    ],
    liveUrl:'https://yogalakshmisubbaiyan.github.io/spotlight',
    githubUrl:'https://github.com/YogalakshmiSubbaiyan/spotlight'
  },
  {
    title: 'SeatFlow | Interactive Event Booking Engine',
    summary: 'SeatFlow is a production-grade consumer ticketing platform featuring an interactive visual seating matrix and a persistent session reservation timer. It guides users through a secure, validation-guarded multi-step checkout funnel that terminates in a high-fidelity animated confirmation view.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    bullets:[ 
      'Interactive Visual Seating Matrix: Renders a high-fidelity 10x12 grid managing multi-dimensional seat configurations (Available, Selected, Reserved) with optimized component rendering during rapid interactions.',
      'Persistent Session Management: Implemented a custom synchronization hook utilizing localStorage to preserve a strict 5-minute checkout countdown across manual browser reloads, automatically releasing reserved inventory upon expiration.'
    ],
    liveUrl:'https://yogalakshmisubbaiyan.github.io/seatflow/',
    githubUrl:'https://github.com/YogalakshmiSubbaiyan/seatflow'
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
              <div className='project-features'>
                <h3>Core Features Implemented:</h3>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="contact-link">
               <span>Live Website</span>
               </a>
               <a href={project.githubUrl} target="_blank" rel="noreferrer" className="contact-link">
               <span>View Code</span>
               </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <h2>Get in touch</h2>
        <p>If you are building something ambitious and want a frontend partner who cares about detail, let’s connect.</p>
        <div className="contact-links">
          <a href='/portfolio/Yogalakshmi-Resume.pdf' target="_blank" rel="noreferrer" className="contact-link">
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