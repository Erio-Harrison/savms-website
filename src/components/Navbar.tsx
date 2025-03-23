"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
            <span className="text-xl font-bold text-blue-600">SAVMS</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#technology" className="text-gray-700 hover:text-blue-600 transition-colors">
              Technology
            </Link>
            <Link href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">
              Demo
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          
          <div className="hidden md:block">
            <a 
              href="https://github.com/Erio-Harrison/SAVMS" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#technology" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link 
                href="#demo" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <a 
                href="https://github.com/Erio-Harrison/SAVMS" 
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}