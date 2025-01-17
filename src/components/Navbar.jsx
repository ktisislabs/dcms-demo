import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="absolute top-0 right-0 w-full bg-black text-white z-20">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo or Title */}
        <div className="text-xl font-bold">DCMS Doorstep Library</div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:block absolute top-full right-0 bg-black w-full lg:static lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center">
          <Link to="/">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">Home</a>
            </li></Link>
          <Link to="/About">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">About Us</a>
            </li></Link>
            <Link to="/NewRelease">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">New Books Released</a>
            </li></Link>
            <Link to="/BookInShelf">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">Book Shelf</a>
            </li></Link>
            <Link to="/ReturnReq">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">Book Return / Request</a>
            </li></Link>
            <Link to="/NewMember">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">New Member</a>
            </li></Link>
            <Link to="/Suggestion">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">Suggestion / Feedback</a>
            </li></Link>
            <Link to="/Login">  <li className="py-2 px-4 hover:bg-gray-700">
              <a href="#about">Log-In</a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
