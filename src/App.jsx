import { useState } from 'react'
import Card from './components/Card'
import './styles/_global.scss'
import mobileHeaderImage from '../public/assets/images/background-pattern-mobile.svg'

const App = () => {
  return (
    <>
      <header>
        <img src={mobileHeaderImage} alt="Mobile Header Image" />
      </header>
      <Card />
    </>
  )
}

export default App
