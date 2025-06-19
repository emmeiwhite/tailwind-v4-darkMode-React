import { Link } from 'react-router-dom'

function ProductItem({ product }) {
  console.log(product)
  const { title, price, rating, thumbnail } = product
  return (
    <Link
      to={`/products/${product.id}`}
      className="max-w-sm rounded overflow-hidden shadow-lg shadow-gray-300 dark:shadow-amber-200">
      <img
        className="w-auto h-[200px]"
        src={thumbnail}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-1">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: $ {price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Rating: {rating}
        </span>
      </div>
    </Link>
  )
}
export default ProductItem
