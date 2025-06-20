import { useAppContext } from '../context/AppContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useAppContext()
  return (
    <div className="flex flex-col gap-5 mt-6">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}
export default TodoList
