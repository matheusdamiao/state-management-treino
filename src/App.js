import { ThemeContext, themes } from './Theme';
import './App.css';
import HeroSectionOne from './HeroSectionOne';
import { createContext, useReducer, useState } from 'react';
import DarkModeContext from './DarkModeContext';
import HeroSectionTwo from './HeroSectionTwo';

import HeroSectionThree from './HeroSectionThree';

export const Contexto = createContext()



function App() {

  // hero section one -> inline css //

  const [theme, setTheme] = useState(themes.dark)
 
  const handle = () => {
    if(theme === themes.dark) {
      setTheme(themes.light)
    }
    if (theme === themes.light){
      setTheme(themes.dark)
    }
  }

 

  // hero section two -> toggle css // 
 
 
  // hero section three -> with reducers //


  const initialState = {darkMode: false}

  const reducer = (state, action)=>{
    switch (action.type) {
      case "LIGHTMODE":
        return {darkMode: false};
      case "DARKMODE":
        return {darkMode: true};
      default:
        return state

    }

  }


  const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <>
    <ThemeContext.Provider value={{theme, handle}}>
        <HeroSectionOne />     
    </ThemeContext.Provider>

    <DarkModeContext>
      <HeroSectionTwo/>
    </DarkModeContext>


    <Contexto.Provider value={{state: state, dispatch: dispatch}}>
      <HeroSectionThree/>
    </Contexto.Provider>



     </>
  );
}

export default App;