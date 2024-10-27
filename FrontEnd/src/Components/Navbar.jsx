import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-8xl mx-auto px-4">
                <div className="flex justify-between items-center">
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
                        <Link to="/Contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Contact</Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-500" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-500" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/Home" className="block py-2 px-4 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Home</Link>
                    <Link to="/Collection" className="block py-2 px-4 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Collection</Link>
                    <Link to="/About" className="block py-2 px-4 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">About</Link>
                    <Link to="/Contact" className="block py-2 px-4 text-gray-500 font-semibold hover:text-purple-500 transition duration-300">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;