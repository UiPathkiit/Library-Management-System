"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 w-full px-4 sm:px-8 py-3 bg-[#EDFFF5] flex justify-between items-center z-50">
      <Link href="/" className="logo text-2xl font-bold text-black">
        logo
      </Link>
      <button
        className="text-black text-2xl md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      <nav
        className={`navbar ${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-[#c8f9df] text-black sm:bg-transparent flex-col items-center space-y-4 p-4 md:static md:w-auto md:flex md:flex-row md:space-y-0 md:space-x-8`}
      >
        <Link href="/features" className="nav-link">Features</Link>
        <Link href="/pricing" className="nav-link">Pricing</Link>
        <Link href="/enterprise" className="nav-link">Enterprise</Link>
        <Link href="/open-account" className="nav-link">Open an account</Link>
        <Link href="/sign-in" className="nav-link">Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
const styles = `
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 15px;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .logo {
    font-size: 32px;
    color: #000;
    font-weight: 700;
  }

  .navbar .nav-link {
    position: relative;
    font-size: 18px;
    color: #000;
    font-weight: 500;
    margin: 0 20px;
  }

  .navbar .nav-link::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
  }

  .navbar .nav-link:hover::before {
    width: 100%;
  }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
