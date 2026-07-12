import './App.css'
import MainComponent from './mainComponent/mainComponent'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div className='appContainer'>
      <header className='topbar'>
        <a className='brand' href='#top'>YOGA</a>

        <nav className='topnav'>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>

        <div className='top-actions'>
          <a href='https://www.linkedin.com/in/yogalakshmi-subbaiyan-a5181094/' target='_blank' rel='noreferrer' className='icon-link' aria-label='LinkedIn'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/YogalakshmiSubbaiyan' target='_blank' rel='noreferrer' className='icon-link' aria-label='GitHub'>
            <FaGithub />
          </a>
          <a href='/portfolio/Yogalakshmi-Resume.pdf' target='_blank' rel='noopener noreferrer' className='resume-link'>Resume</a>
        </div>
      </header>
      <main id='top' className='page-shell'>
        <MainComponent />
      </main>
    </div>
  )
}

export default App
