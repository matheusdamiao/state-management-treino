import React, { useContext } from 'react'
import { Contexto } from './App'


const Botao = () => {

   const contexto = useContext(Contexto)
   const theme = contexto.state.darkMode
   

    const handleClick = () =>{
        if(theme){
        contexto.dispatch({type: "LIGHTMODE"})
        }
        else {
            contexto.dispatch({type: "DARKMODE"})
        } 
        
    }

  return (
    <button className={theme ? 'btn-light':'btn-dark'}onClick={handleClick}> Change Theme
        </button>
  )
}

export default Botao
