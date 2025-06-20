import { createContext, useContext, useState } from 'react'

// Step-1: Create Context
const AppContext = createContext()

const dummyTodos = [
  {
    id: 1,
    text: 'Finish Product Page layout',
    completed: false
  },
  {
    id: 2,
    text: 'Refactor Theme Context',
    completed: true
  },
  {
    id: 3,
    text: 'Fix shadow bug on dark header',
    completed: false
  },
  {
    id: 4,
    text: 'Add RHF to TodoForm',
    completed: false
  }
]

function ThemeProvider({ children }) {
  // 1. theme logic
  const [theme, setTheme] = useState('dark')

  function handleTheme() {
    setTheme(prev => {
      if (prev === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }

  // 2. todos Logic
  const [todos, setTodos] = useState([])

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  function deleteTodo(id) {
    console.log('delete button')
    const udpatedTodos = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(udpatedTodos)
  }

  function addTodo(text) {
    setTodos(prev => {
      return [...prev, { id: Date.now(), text, isCompleted: false }]
    })
  }

  // 3. filters logic
  const [filter, setFilter] = useState('all')

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed
    }

    if (filter === 'active') {
      return todo.completed
    }

    return todo // 'all'
  })

  // App Valuew
  const appValues = {
    theme,
    handleTheme,
    todos,
    setTodos,
    toggleTodo,
    deleteTodo,
    addTodo,
    filter,
    setFilter,
    filteredTodos
  }

  return <AppContext.Provider value={appValues}>{children}</AppContext.Provider>
}

export default ThemeProvider
export const useAppContext = () => useContext(AppContext)
