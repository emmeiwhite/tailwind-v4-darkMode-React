import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <div
      className={`${
        theme === 'light' ? 'dark' : ''
      }   bg-white dark:bg-zinc-800 h-screen w-full transition `}>
      <Navbar />
      <ProductList />
    </div>
  )
}

export default App
