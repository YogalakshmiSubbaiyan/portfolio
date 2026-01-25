import { useState } from 'react'
import './App.css'
import LeftSideBarComponent from './leftSideBarComponent/leftSideBar'


function App() {
  

  return (
    <>
      <div className='appContainer'>
        <div className='layout-container'>
          <LeftSideBarComponent />
          <div>Col1</div>
          <div>Col1</div>
        </div>
      </div>
    </>
  )
}

export default App
