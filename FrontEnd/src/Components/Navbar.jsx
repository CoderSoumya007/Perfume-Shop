import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-8xl bg-black mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link to="/" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-500 text-lg">Perfume Shop</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/Home" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Home</Link>
                        <Link to="/Collection" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Collection</Link>
                        <Link to="/About" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">About</Link>
                        <Link to="/Contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300" >Contact</Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar