import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'

function Navbar() {
  const { theme, handleTheme } = useTheme()

  return (
    <header className="py-5 dark:bg-zinc-800 dark:text-white  shadow-gray-50 dark:shadow-amber-100 dark:shadow">
      <nav className="max-w-5xl mx-auto px-5 flex justify-between items-center">
        <h1>ThemeContext</h1>
        <button
          className="text-2xl cursor-pointer"
          onClick={handleTheme}>
          {theme === 'dark' ? <LuSun /> : <LuMoon />}
        </button>
      </nav>
    </header>
  )
}
export default Navbar
