import { useEffect, useState } from 'react'
import './mainComponent.css'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import ProjectSpotlight from '../projectSpotlight/ProjectSpotlight'
import heroPhoto from '../assets/heroImage.png'

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

const engineerTech = ['React', 'TypeScript', 'C#', 'Angular', 'UI Systems']
const artisanPhotos = [
  { url: 'src/assets/pottery1.jpg', title: 'Handcrafted Ceramics' },
  { url: 'src/assets/painting1.jpg', title: 'Handbuilding Pottery' },
  { url: 'src/assets/crafts1.jpg', title: 'Handcrafted Ceramics' },
  { url: 'src/assets/wallart.png', title: 'Wall Art' },
  { url: 'src/assets/quilling.png', title: 'Paper Quilling Art' }
]

function HeroSplitScreen() {
  const [activeSide, setActiveSide] = useState<'engineer' | 'artisan'>('engineer')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const engineerActive = activeSide === 'engineer'
  const leftPanelClass = engineerActive ? 'md:w-[85%]' : 'md:w-[15%]'
  const rightPanelClass = engineerActive ? 'md:w-[15%]' : 'md:w-[85%]'

  useEffect(() => {
    if (activeSide !== 'artisan') {
      return
    }

    const timerId = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % artisanPhotos.length)
    }, 5000)

    return () => {
      window.clearInterval(timerId)
    }
  }, [activeSide])

  return (
    <section id="about" className="relative flex h-screen max-h-screen w-full overflow-hidden rounded-[32px] border border-white/10 bg-[#0B0F19] shadow-[0_24px_80px_rgba(2,8,23,0.45)]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_30%)]" />

      <div className={`absolute left-[85%] top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 transition-opacity duration-300 ${engineerActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        <div className="w-36 h-48 md:w-44 md:h-60 rounded-full border-2 border-white/20 shadow-2xl overflow-hidden">
          <img src={heroPhoto} alt="Yogalakshmi Subbaiyan" className="w-full h-full object-cover object-center" />
        </div>
        {engineerActive && (
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveSide('artisan')
            }}
            className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 px-4 py-2 rounded-full text-xs font-medium shadow-lg backdrop-blur-md cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            🎨 Explore Artisan Side →
          </button>
        )}
      </div>

      <div className="relative flex h-full w-full flex-col items-stretch md:flex-row">
        <article
          className={`relative flex h-full max-h-full w-full flex-grow flex-none items-start justify-center overflow-y-auto border-b border-white/10 bg-[#0B0F19] p-6 text-white transition-all duration-700 ease-in-out md:w-1/2 md:border-b-0 md:border-r md:p-10 ${leftPanelClass}`}
          onClick={() => setActiveSide('engineer')}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)] opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-25" />

          <div className="relative z-10 h-full w-full overflow-hidden">
            <div className={`flex h-full w-full max-w-3xl flex-col justify-center pr-12 text-left transition-opacity duration-500 ${engineerActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
              <div className="flex flex-col items-start gap-4 pl-8 md:pl-16">
                <p className="text-sm font-medium tracking-wider text-cyan-400">Hello, I am</p>
                <h1 className="text-4xl font-bold tracking-[-0.05em] text-slate-100 sm:text-5xl lg:text-6xl">
                  Yogalakshmi Subbaiyan
                </h1>
                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  I’m a full-stack engineer focused on shipping clean, scalable interfaces with strong systems thinking, performance awareness,
                  and a bias toward polished delivery.
                </p>

                <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  I enjoy turning ideas into usable, refined web experiences. My work blends strong engineering habits with an eye for detail,
                  creating products that are both performant and intuitive. I enjoy collaborating with cross-functional teams, solving complex
                  problems, and continuously learning new technologies to build better digital experiences.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {engineerTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-300/20 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-slate-100 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            <div className={`absolute inset-0 flex h-full items-center justify-center transition-opacity duration-500 ${engineerActive ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
              <p className="text-xs font-semibold tracking-[0.35em] [writing-mode:vertical-rl] rotate-180 text-cyan-300">← THE ENGINEER</p>
            </div>
          </div>
        </article>

        <article
          className={`group relative flex h-full max-h-full w-full flex-grow flex-none items-start justify-center overflow-y-auto p-6 text-white transition-all duration-700 ease-in-out md:w-1/2 md:p-10 ${rightPanelClass} bg-[#141210]`}
          onClick={() => setActiveSide('artisan')}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)] opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,transparent,rgba(255,255,255,0.035),transparent)] opacity-20" />

          <div className="relative z-10 h-full w-full overflow-hidden">
            <div className={`flex h-full w-full max-w-3xl flex-col justify-start pt-16 md:pt-20 transition-opacity duration-500 ${engineerActive ? 'pointer-events-none opacity-0' : 'opacity-100'}`}>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setActiveSide('engineer')
                }}
                className="mt-0 mb-4 w-fit bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-5 py-2.5 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-105"
              >
                💻 ← Back to Technical Profile
              </button>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">The Artisan</p>
                <p className="max-w-2xl text-base leading-8 text-[#EAE5D9] sm:text-lg">
                  Outside code, I explore pottery, painting, and arts &amp; crafts. That creative practice sharpens my eye for balance,
                  texture, and composition, which I bring back into the digital products I design and build.
                </p>

                <div className="mt-8 relative h-[260px] w-full max-w-xl overflow-hidden rounded-2xl border border-amber-500/20 bg-stone-900/50 shadow-2xl md:h-[340px]">
                  {artisanPhotos.map((photo, index) => (
                    <img
                      key={photo.url}
                      src={photo.url}
                      alt={photo.title}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-30 ease-out ${
                        index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                      }`}
                    />
                  ))}

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                    <p className="text-sm font-medium text-[#EAE5D9]">{artisanPhotos[currentImageIndex].title}</p>
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    {artisanPhotos.map((photo, index) => (
                      <button
                        key={photo.title}
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation()
                          setCurrentImageIndex(index)
                        }}
                        aria-label={`Show ${photo.title}`}
                        className={`transition-all ${
                          index === currentImageIndex ? 'h-2 w-6 rounded-full bg-amber-400' : 'h-2 w-2 rounded-full bg-white/30 cursor-pointer'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 border-t border-amber-500/20 pt-6 md:grid-cols-2">
                  <div>
                    <p className="text-amber-200/60 text-xs tracking-wider uppercase">Mediums</p>
                    <p className="mt-2 text-sm text-[#EAE5D9]">Ceramics, paper quilling  &amp; Acrylics, Digital UI</p>
                  </div>
                  <div>
                    <p className="text-amber-200/60 text-xs tracking-wider uppercase">Design Philosophy</p>
                    <p className="mt-2 text-sm text-[#EAE5D9]">Translating organic textures and tactile balance into clean digital experiences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${engineerActive ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
              <div className="absolute top-32 left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-[13px] md:text-sm tracking-[0.25em] text-amber-300 font-medium flex items-center gap-2">
                <span>THE ARTISAN</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              </div>
            </div>
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