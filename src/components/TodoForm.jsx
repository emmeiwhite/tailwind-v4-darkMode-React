import { useForm } from 'react-hook-form'
import { useAppContext } from '../context/AppContext'

function TodoForm() {
  const { addTodo } = useAppContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    addTodo(data.task) // task is the name of input
    reset() // clear the input field after submission
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-3xl mx-auto mt-6">
      <input
        type="text"
        placeholder="Enter your todo..."
        {...register('task', { required: 'Please enter a task' })}
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400 dark:bg-zinc-800 dark:text-white dark:border-zinc-600"
      />

      <button
        type="submit"
        className="px-6 py-2 bg-amber-500 text-white font-medium rounded hover:bg-amber-600 transition">
        Add
      </button>

      {errors.task && <p className="text-red-500 text-sm mt-1">{errors.task.message}</p>}
    </form>
  )
}

export default TodoForm
