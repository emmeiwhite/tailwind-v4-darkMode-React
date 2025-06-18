import { createContext, useContext, useState } from 'react'

// Step-1: Create Context
const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('')

  function handleTheme() {
    setTheme('dark')
  }
  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
export const useTheme = () => useContext(ThemeContext)
