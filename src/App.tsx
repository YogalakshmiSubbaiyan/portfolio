import { useState } from 'react'
import './App.css'
import LeftSideBarComponent from './leftSideBarComponent/leftSideBar'
import MainComponent from './mainComponent/mainComponent'
import RightSideBarComponent from './rightSideBarComponent/rightSideBar'


function App() {
  

  return (
    <>
      <div className='appContainer'>
        <div className='layout-container'>
          <LeftSideBarComponent />
          <MainComponent/>
          <RightSideBarComponent/>
        </div>
      </div>
    </>
  )
}

export default App
