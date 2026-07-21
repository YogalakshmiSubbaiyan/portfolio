import './App.css'
import MainComponent from './mainComponent/mainComponent'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className='appContainer'>
      <header className='sticky top-3 z-50 mx-auto w-full max-w-4xl'>
        <div className='flex flex-wrap items-center justify-center gap-4 rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 shadow-lg backdrop-blur-md'>
          <nav className='topnav flex items-center justify-center gap-1 sm:gap-2'>
            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
          </nav>

          <div className='top-actions flex items-center gap-2'>
            <a href='https://www.linkedin.com/in/yogalakshmi-subbaiyan-a5181094/' target='_blank' rel='noreferrer' className='icon-link' aria-label='LinkedIn'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/YogalakshmiSubbaiyan' target='_blank' rel='noreferrer' className='icon-link' aria-label='GitHub'>
              <FaGithub />
            </a>
            <a href='/portfolio/Yogalakshmi-Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-link'>Resume</a>
          </div>
        </div>
      </header>
      <main id='top' className='page-shell'>
        <MainComponent />
      </main>
    </div>
  )
}

export default App
