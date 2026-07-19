import spotlightDemoVideo from '../assets/Spotlight_demo.webm'
import seatflowDemoVideo from '../assets/Seatflow_demo.webm'

const techStack = ['React', 'TypeScript', 'Vite', 'Tailwind CSS']

const techBadgeClasses: Record<string, string> = {
  React: 'border-sky-300/45 bg-sky-400/15 text-sky-100',
  TypeScript: 'border-blue-500/55 bg-blue-900/50 text-blue-100',
  Vite: 'border-violet-300/45 bg-violet-400/15 text-violet-100',
  'Tailwind CSS': 'border-cyan-300/45 bg-cyan-400/15 text-cyan-100'
}

const projectShowcases = [
  {
    name: 'Spotlight',
    title: 'Spotlight | Enterprise Event Analytics Portal',
    summary:
      'Spotlight is an enterprise-grade event analytics portal for venue operators to monitor sales, manage transactional records, and inspect performance metrics in real time. The experience is built for speed and clarity with resilient client-side state management and recruiter-friendly shareable dashboard URLs.',
    videoSrc: spotlightDemoVideo,
    videoAriaLabel: 'Spotlight analytics dashboard demo',
    fallbackText: 'Your browser does not support the Spotlight project demo video.',
    features: [
      'URL-Driven Filter State: Synchronizes search, status filters, and sorting controls with query parameters so each analytics view can be bookmarked and shared exactly as configured.',
      'Performance Optimization Layers: Uses debounced filtering, skeleton loading states, and asynchronous mock data pipelines to keep dashboard interactions fluid under dense transactional datasets.'
    ]
  },
  {
    name: 'Seatflow',
    title: 'SeatFlow | Interactive Event Booking Engine',
    summary:
      'SeatFlow is a production-grade consumer ticketing platform featuring an interactive visual seating matrix and a persistent session reservation timer. It guides users through a secure, validation-guarded multi-step checkout funnel that ends in a polished confirmation experience.',
    videoSrc: seatflowDemoVideo,
    videoAriaLabel: 'Seatflow seat selection system demo',
    fallbackText: 'Your browser does not support the Seatflow project demo video.',
    features: [
      'Interactive Visual Seating Matrix: Renders a high-fidelity 10x12 grid managing multi-dimensional seat configurations (Available, Selected, Reserved) with optimized component rendering during rapid interactions.',
      'Persistent Session Management: Uses localStorage synchronization to preserve a strict 5-minute checkout countdown across reloads, automatically releasing reserved inventory on expiration.'
    ]
  }
]

export default function ProjectSpotlight() {
  return (
    <div className="space-y-6 md:space-y-8">
      {projectShowcases.map((project) => (
        <section
          key={project.name}
          className="rounded-3xl border border-slate-300/20 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-slate-950 p-6 shadow-2xl shadow-slate-950/45 backdrop-blur-sm transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_0_38px_rgba(34,211,238,0.12)] md:p-10"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="mb-4 w-full max-w-[860px] text-left text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
                {project.title}
              </h3>
              <div className="w-full max-w-[860px] overflow-hidden border border-slate-200/20 border-t-slate-100/45 bg-slate-950/50 shadow-lg shadow-slate-950/30">
                <div className="relative flex h-10 items-center border-b border-slate-200/15 bg-slate-900/70 px-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-[0.08em] text-slate-200">
                    {project.name}
                  </span>
                </div>
                <video
                  className="block h-auto w-full align-top pointer-events-auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  aria-label={project.videoAriaLabel}
                >
                  <source src={project.videoSrc} type="video/webm" />
                  {project.fallbackText}
                </video>
              </div>
            </div>

            <div className="flex h-full flex-col justify-start gap-5 self-stretch">
              <p className="text-sm leading-7 text-slate-300 md:text-base">{project.summary}</p>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">Core Features Implemented</h4>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300 md:text-base md:leading-7">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300/60 bg-emerald-400/15 text-[11px] font-bold text-emerald-200 shadow-[0_0_14px_rgba(16,185,129,0.45)]">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${techBadgeClasses[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
