"use client";
import React, { useState } from "react";
import Link from "next/link";
// import resume from '../../../public/CarolineBuigasResume.pdf'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-end items-center">
        {/* Mobile menu button (Hamburger icon) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-blue-600 hover:opacity-70">
            Portfolio
          </a>
          <a
            className="text-blue-600 hover:opacity-70"
            href="/CarolineBuigasResume.pdf"
            target="_blank"
          >
            Resume
          </a>
          <a href="/contact" className="text-blue-600 hover:opacity-70">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="p-4">
          <a href="/" className="block text-blue-600 mb-2">
            Portfolio
          </a>
          <a
            href="/images/CarolineBuigasResume.pdf"
            target="_blank"
            className="block text-blue-600 mb-2"
            download={true}
          >
            Resume
          </a>
          <a href="/contact" className="block text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
