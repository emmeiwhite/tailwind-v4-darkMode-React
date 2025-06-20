import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function Todos() {
  return (
    <section className="dark:bg-zinc-800 dark:text-white mt-20">
      <div className="max-w-5xl mx-auto px-5 py-2">
        <h1 className="text-3xl text-center">Todos of the day</h1>

        <div className="w-full sm:max-w-3/5 mx-auto">
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </section>
  )
}
