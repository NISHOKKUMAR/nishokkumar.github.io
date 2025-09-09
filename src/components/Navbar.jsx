import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#061022]/60 backdrop-blur-sm z-30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md border border-sea text-sea flex items-center justify-center font-bold">N</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sea ml-auto">
          <a href="#about" className="hover:underline">01. About</a>
          <a href="#projects" className="hover:underline">02. Projects</a>
          <a href="#certs" className="hover:underline">03. Certifications</a>
          <a href="#contact" className="hover:underline">04. Contact</a>
          <a href="/SOC_Nishok_Resume.pdf" className="ml-4 border border-sea text-sea px-4 py-2 rounded-md">Resume</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-sea cursor-pointer" onClick={toggleMenu}>
          Menu
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#061022]/80 p-4`}>
        <nav className="flex flex-col items-center text-sea">
          <a href="#about" className="hover:underline py-2">01. About</a>
          <a href="#projects" className="hover:underline py-2">02. Projects</a>
          <a href="#certs" className="hover:underline py-2">03. Certifications</a>
          <a href="#contact" className="hover:underline py-2">04. Contact</a>
          <a href="/SOC_Nishok_Resume.pdf" className="mt-4 border border-sea text-sea px-4 py-2 rounded-md">Resume</a>
        </nav>
      </div>
    </header>
  );
}
