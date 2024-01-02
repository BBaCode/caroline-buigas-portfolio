"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import resume from '../../../public/CarolineBuigasResume.pdf'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname((pathname) => {
    return pathname;
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between md:justify-end items-center">
        {/* Mobile menu button (Hamburger icon) */}
        <a
          href="/"
          className="inline-block text-blue-600 text-lg font-bold title md:hidden"
        >
          Caroline Buigas UX Portfolio
        </a>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-blue-600 focus:outline-none"
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
        <div
          className={`hidden md:flex space-x-4 w-full ${
            path === "/" ? "md:justify-end" : "md:justify-between "
          }`}
        >
          <a
            href="/"
            className={`text-blue-600 hover:opacity-70 font-bold title text-xl ${
              path !== "/" ? "inline-block" : "hidden"
            }`}
          >
            Caroline Buigas UX Portfolio
          </a>
          <div className="">
            <a
              href="/"
              className={`text-blue-600 hover:opacity-70 ml-2 ${
                path === "/" ? "border-blue-600 border-b" : ""
              }`}
            >
              Portfolio
            </a>
            <a
              className={`text-blue-600 hover:opacity-70 ml-2 ${
                path === "/resume" ? "border-blue-600 border-b" : ""
              }`}
              href="/CarolineBuigasResume.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a
              href="/contact"
              className={`text-blue-600 hover:opacity-70 ml-2 ${
                path === "/contact" ? "border-blue-600 border-b" : ""
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        <div className="p-4">
          <a href="/" className="block text-blue-600 mb-2">
            Portfolio
          </a>
          <a
            href="/resume"
            target="_blank"
            className="block text-blue-600 mb-2"
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
