import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Step-1: CREATE A QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5 // 5 minutes 1000ms = 1s, 1s*60=1min, 1min*5 = 5 min
    }
  }
})

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </QueryClientProvider>
)
