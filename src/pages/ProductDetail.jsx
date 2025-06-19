import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const fetchProductDetails = async id => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`)
  return res.data
}

function ProductDetail() {
  const { id } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductDetails(id)
  })

  if (isLoading) {
    return (
      <section className="dark:bg-zinc-800 dark:text-white">
        <div className="max-w-5xl mx-auto px-5 py-10 text-center">
          <h1 className="text-2xl mb-5 animate-pulse">Loading ...</h1>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="dark:bg-zinc-800 dark:text-white">
        <div className="max-w-5xl mx-auto px-5 py-10 text-center">
          <h1 className="text-2xl mb-5 text-red-500">Error loading product details ...</h1>
        </div>
      </section>
    )
  }

  return (
    <section className="dark:bg-zinc-800 dark:text-white mt-20">
      <div className="max-w-5xl mx-auto px-5 py-10">
        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-10 ">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="w-full h-auto object-contain rounded-xl "
          />

          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-8 mt-10">{data.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{data.description}</p>

            <p className="text-lg font-semibold">
              Brand: <span className="text-gray-600 dark:text-gray-300">{data.brand}</span>
            </p>
            <p className="text-lg font-semibold">
              Category: <span className="text-gray-600 dark:text-gray-300">{data.category}</span>
            </p>
            <p className="text-xl font-bold mt-4 text-green-600 dark:text-green-400 mb-8">
              Price: ${data.price}
            </p>

            {/* Back Button */}
            <Link to="/">
              <button className="mb-6 bg-amber-400 hover:bg-amber-500 px-5 py-2 rounded-xl text-sm font-medium transition">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
