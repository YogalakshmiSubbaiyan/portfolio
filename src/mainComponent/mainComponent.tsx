import { useRef, useState } from 'react'
import './mainComponent.css'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import ProjectSpotlight from '../projectSpotlight/ProjectSpotlight'

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

type HeroPanel = 'engineer' | 'artisan' | null

const engineerTech = ['React', 'TypeScript', 'C#', 'Angular', 'UI Systems']

function HeroSplitScreen() {
  const [activePanel, setActivePanel] = useState<HeroPanel>(null)
  const splitRef = useRef<HTMLDivElement | null>(null)

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const bounds = splitRef.current?.getBoundingClientRect()

    if (!bounds) {
      return
    }

    const nextPanel: HeroPanel = event.clientX < bounds.left + bounds.width / 2 ? 'engineer' : 'artisan'

    setActivePanel(nextPanel)
  }

  const leftPanelClass = activePanel === 'engineer'
    ? 'md:w-[60%] md:opacity-100'
    : activePanel === 'artisan'
      ? 'md:w-[40%] md:opacity-100'
      : 'md:w-1/2 md:opacity-100'

  const rightPanelClass = activePanel === 'artisan'
    ? 'md:w-[60%] md:opacity-100'
    : activePanel === 'engineer'
      ? 'md:w-[40%] md:opacity-30'
      : 'md:w-1/2 md:opacity-100'

  const leftContentClass = activePanel === 'artisan' ? 'opacity-30' : 'opacity-100'
  const rightContentClass = activePanel === 'engineer' ? 'opacity-40' : 'opacity-40 md:group-hover:opacity-100'

  return (
    <section id="about" className="relative min-h-screen overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] pt-20 pb-0 shadow-[0_24px_80px_rgba(2,8,23,0.45)] md:pt-24 md:pb-0">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_30%)]" />
      <div
        ref={splitRef}
        className="group relative flex h-full w-full flex-col items-stretch md:flex-row"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActivePanel(null)}
      >
        <article
          className={`relative flex h-full w-full flex-grow flex-none items-start justify-center overflow-hidden border-b border-white/10 bg-[#0B0F19] px-8 py-12 text-white will-change-[width] transition-all duration-500 ease-in-out md:w-1/2 md:border-b-0 md:border-r md:px-16 md:py-16 ${leftPanelClass}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)] opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-0 transition-opacity duration-700 md:group-hover:opacity-100" />

          <div className={`relative z-10 flex h-full w-full max-w-4xl flex-col justify-center gap-5 overflow-hidden self-center transition-opacity duration-500 ease-in-out ${leftContentClass}`}>
            <p className="text-sm font-medium tracking-wider text-cyan-400">Hello, I am</p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.05em] text-slate-100 sm:text-5xl lg:text-6xl">
              Yogalakshmi Subbaiyan
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I’m a full-stack engineer focused on shipping clean, scalable interfaces with strong systems thinking, performance awareness,
              and a bias toward polished delivery.
            </p>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              I enjoy turning ideas into usable, refined web experiences. My work blends strong engineering habits with an eye for detail,
              creating products that are both performant and intuitive. I enjoy collaborating with cross-functional teams, solving complex
              problems, and continuously learning new technologies to build better digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {engineerTech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-sky-300/20 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-sky-400/15"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article
          className={`relative flex h-full w-full flex-grow flex-none items-start justify-center overflow-hidden px-8 py-12 text-white will-change-[width] transition-all duration-500 ease-in-out md:w-1/2 md:px-12 md:py-16 ${rightPanelClass} bg-[#141210]`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)] opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent,rgba(255,255,255,0.035),transparent)] opacity-0 transition-opacity duration-700 md:group-hover:opacity-100" />

          <div className={`relative z-10 flex h-full w-full max-w-3xl flex-col justify-center gap-5 overflow-hidden self-center transition-opacity duration-500 ease-in-out ${rightContentClass}`}>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">The Artisan</p>
            <p className="max-w-2xl text-base leading-8 text-[#EAE5D9] sm:text-lg">
              Outside code, I explore pottery, painting, and arts &amp; crafts. That creative practice sharpens my eye for balance,
              texture, and composition, which I bring back into the digital products I design and build.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default function MainComponent() {
  return (
    <div className="mainComponent">
      <HeroSplitScreen />

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
        <ProjectSpotlight />
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