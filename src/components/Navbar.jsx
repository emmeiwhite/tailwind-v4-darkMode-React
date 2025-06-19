import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

function Navbar() {
  const { theme, handleTheme } = useTheme()

  return (
    <header className="py-5 shadow-lg shadow-gray-300 dark:shadow-amber-300 transition-all">
      <nav className="max-w-5xl mx-auto px-5 flex justify-between items-center">
        <Link to={`/`}>
          <h1 className="text-blue-500 dark:text-amber-200 text-2xl font-extrabold">GoingOn</h1>
        </Link>

        <button
          className="text-2xl cursor-pointer dark:text-amber-200"
          onClick={handleTheme}>
          {theme === 'dark' ? <LuSun /> : <LuMoon />}
        </button>
      </nav>
    </header>
  )
}
export default Navbar
