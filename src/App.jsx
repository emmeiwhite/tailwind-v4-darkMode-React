import Navbar from './components/Navbar'
import { useTheme } from './context/ThemeContext'
import HomePage from './pages/HomePage'
import ProductDetail from './pages/ProductDetail'
import ProductsPage from './pages/ProductsPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const { theme } = useTheme()

  return (
    <div
      className={`${
        theme === 'light' ? 'dark' : ''
      }   bg-white dark:bg-zinc-800 h-screen w-full transition `}>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/products"
            element={<ProductsPage />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
