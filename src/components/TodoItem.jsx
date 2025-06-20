import { useAppContext } from '../context/AppContext'

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo } = useAppContext()

  return (
    <div className="flex items-center justify-between border border-gray-400 dark:border-gray-600 px-4 py-3 rounded-md shadow-sm hover:bg-amber-100 dark:hover:bg-zinc-600 transition-all">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="accent-amber-500 w-5 h-5"
        />
        <h2
          className={`${
            todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
          } text-lg font-medium`}>
          {todo.text}
        </h2>
      </div>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="border border-amber-600 text-amber-700 hover:bg-amber-200 dark:hover:bg-zinc-700 px-4 py-1 rounded transition">
        Delete
      </button>
    </div>
  )
}
export default TodoItem
