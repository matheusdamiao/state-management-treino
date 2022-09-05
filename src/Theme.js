import {createContext} from 'react'


export const themes = {
    light: {
        background: 'white',
        color: 'black',
        primaryColor: 'blue'
    },
    dark: {
        background: 'black',
        color: 'white',
        primaryColor: 'blue'
    }
};


export const ThemeContext = createContext({
    theme: themes.light,
    handleTheme: () => {},
});