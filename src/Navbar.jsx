import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 lg:px-32 bg-white md:px-12">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="text-blue-500 font-bold text-xl">Cleany</a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 z-10">
        <a href="/" className="text-gray-900 hover:text-blue-500">Home</a>
        <a href="/about" className="text-gray-500 hover:text-blue-500">About</a>
        <a href="/services" className="text-gray-500 hover:text-blue-500">Services</a>
        <a href="/contact" className="text-gray-500 hover:text-blue-500">Contact</a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4 z-10">
        <button className="text-[rgba(219,237,251,1)] hover:text-blue-600">Login</button>
        <button className="bg-[rgba(219,237,251,1)] text-[rgba(82,142,170,1)] px-4 py-2 rounded-lg hover:bg-gray-200">Sign Up</button>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-blue-500 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50 px-6 py-4`}>
        <div className="flex flex-col space-y-4">
          <a href="/" className="text-gray-900 hover:text-blue-500">Home</a>
          <a href="/about" className="text-gray-500 hover:text-blue-500">About</a>
          <a href="/services" className="text-gray-500 hover:text-blue-500">Services</a>
          <a href="/contact" className="text-gray-500 hover:text-blue-500">Contact</a>
          <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
            <button className="text-blue-500 hover:text-blue-600 text-left">Login</button>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 w-full">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;