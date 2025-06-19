import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ProductItem from './ProductItem'

const url = 'https://dummyjson.com/products'
const fetchProducts = async () => {
  const response = await axios.get(url)
  return response.data
}
function ProductList() {
  // Step-3: useQuery()

  const {
    isLoading,
    error,
    data: products
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })

  if (isLoading) {
    return (
      <section className="dark:bg-zinc-800 dark:text-white">
        <div className="max-w-5xl mx-auto px-5  py-5 text-center">
          <h1 className="text-2xl mb-5">Loading ...</h1>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="dark:bg-zinc-800 dark:text-white">
        <div className="max-w-5xl mx-auto px-5  py-5 text-center">
          <h1 className="text-2xl mb-5">Error loading products ...</h1>
        </div>
      </section>
    )
  }
  return (
    <section className="dark:bg-zinc-800 dark:text-white">
      <div className="max-w-5xl mx-auto px-5  py-5 ">
        <h1 className="text-3xl mb-5 my-10 text-center">ProductList</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {products.products.map(item => (
            <ProductItem
              key={item.id}
              product={item}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default ProductList
