import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import './App.css';

function HeroSectionOne() {


  const context = useContext(ThemeContext)
  //  console.log(context)

  return (
    <div className='main-div' style={{backgroundColor: context.theme.background}}>
          
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1 style={{color: context.theme.color}}> Praticando Context API </h1>
            <button onClick={context.handle} style={{width:'150px', marginTop:'20px', cursor: 'pointer', padding:'10px 20px 10px 20px',color: 'white', backgroundColor: context.theme.primaryColor, borderRadius:'9px'}}> Mudar tema </button>
        </div>
                     
    </div>
  )
}

export default HeroSectionOne
