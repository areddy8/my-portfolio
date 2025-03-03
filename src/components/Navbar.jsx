import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center bg-gray-900 text-white py-4 shadow-lg">
      <div className="flex space-x-6 text-lg">
        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
        <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
        <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
