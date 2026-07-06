import './App.css'
import MainComponent from './mainComponent/mainComponent'

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
      </header>

      <main id='top' className='page-shell'>
        <MainComponent />
      </main>
    </div>
  )
}

export default App
