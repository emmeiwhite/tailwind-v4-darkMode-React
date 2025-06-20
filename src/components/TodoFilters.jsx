import { useAppContext } from '../context/AppContext'

function TodoFilters() {
  const { filter, setFilter } = useAppContext()

  const filters = ['all', 'active', 'completed']

  return (
    <div className="flex gap-5 flex-wrap mt-5">
      {filters.map(f => {
        return (
          <button
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded ${
              f === filter
                ? 'bg-amber-500 text-white'
                : 'bg-gray-200 text-gray-800 dark:bg-zinc-600 dark:text-gray-100'
            } transition
            cursor-pointer`}>
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        )
      })}
    </div>
  )
}
export default TodoFilters
