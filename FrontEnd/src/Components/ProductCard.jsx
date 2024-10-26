import { Link } from "react-router-dom"
export default function ProductCard({ product }) {    
    return (
        <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="relative">
          <img src={product.thumbnails} alt={product.name} className="w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">View Details</span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{product.name}</h2>
          <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-purple-600 font-bold">${product.sizes[0].price}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
    )
}