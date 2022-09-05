import React, { useContext } from 'react'
import {DarkContext} from './DarkModeContext'

const HeroSectionTwo = () => {

    const {darkMode, toggleTheme} = useContext(DarkContext)
    

  return (
    <div style={{height: '100vh', width: '100%'}} className={darkMode ? 'bg-dark' : 'bg-light'}>
        <h1> Praticando Context API de uma maneira diferente </h1>
        <button className={darkMode ? 'btn-dark' : 'btn-light'} onClick={()=> toggleTheme()}> Turn {darkMode ? 'on': 'off'} the lights</button>
    </div>
  )
}

export default HeroSectionTwo
