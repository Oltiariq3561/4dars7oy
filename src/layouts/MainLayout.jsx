import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';

function MainLayout({ children }) {
  return (
    <div className="bg-[#0a192f] p-4 text-white">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500 p-4 px-5 rounded text-white font-bold">C</div>
        </div> 
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-400 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-blue-500">About</Link>
          <Link to="/products" className="text-gray-400 hover:text-blue-500">Products</Link>
          <Link to="/cart" className="text-gray-400 hover:text-blue-500">Cart</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
