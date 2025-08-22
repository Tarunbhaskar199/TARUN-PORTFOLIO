import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-200 to-orange-100 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-gray-800">
          Tarun Bhaskar
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/education" className="hover:text-blue-600">Education</a>
          <a href="/resume" className="hover:text-blue-600">Resume</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-gray-800" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-50 to-purple-100 shadow-lg flex flex-col space-y-4 px-6 py-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/projects" className="hover:text-blue-600">Projects</a>
          <a href="/education" className="hover:text-blue-600">Education</a>
          <a href="/resume" className="hover:text-blue-600">Resume</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
}