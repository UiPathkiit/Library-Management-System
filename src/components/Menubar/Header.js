"use client";
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full px-4 py-3 bg-transparent flex justify-between items-center z-50">
      {/* Logo */}
      <a href="/" className="text-2xl font-bold text-white">
        logo
      </a>

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-white text-2xl md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navbar */}
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute top-full left-0 w-full bg-black bg-opacity-90 flex-col items-center space-y-4 p-4 md:static md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-8`}
      >
        <a
          href="/"
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Features
        </a>
        <a
          href="/"
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Pricing
        </a>
        <a
          href="/"
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Enterprise
        </a>
        <a
          href="/"
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >
          Open an account
        </a>
        <a
          href="/"
          className="text-lg font-medium text-white relative transition-all hover:after:w-full after:content-[''] after:absolute after:top-full after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all"
        >

          Sign in
        </a>
      </nav>
    </header>
  );
};

export default Header;
