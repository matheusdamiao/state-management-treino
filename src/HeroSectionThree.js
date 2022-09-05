import React, { useContext} from 'react'
import Botao from './Botao'
import { Contexto } from './App'



const HeroSectionThree = () => {


  const context = useContext(Contexto)
  const theme = context.state.darkMode  

  
  return (
    <div className={`main-div ${theme ? 'bg-dark' : 'bg-light'}`}>
      <h1 > Practicing Context API with reducers</h1>
      <Botao/>
    </div>
  )
}

export default HeroSectionThree

