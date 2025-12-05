import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* ---------------- NAVBAR ---------------- */}
      <header className="fixed top-0 left-0 right-0 bg-[#061022]/60 backdrop-blur-sm z-30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-md border border-sea text-sea flex items-center justify-center font-bold">
              N
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sea ml-auto">
            <a href="#about" className="hover:underline">01. About</a>
            <a href="#projects" className="hover:underline">02. Projects</a>
            <a href="#certs" className="hover:underline">03. Certifications</a>
            <a href="#contact" className="hover:underline">04. Contact</a>

            {/* Resume modal trigger */}
            <button
              onClick={() => setShowResume(true)}
              className="ml-4 border border-sea text-sea px-4 py-2 rounded-md 
                         hover:bg-sea hover:text-slate-900 transition"
            >
              Resume
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-sea cursor-pointer" onClick={toggleMenu}>
            Menu
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#061022]/80 p-4`}>
          <nav className="flex flex-col items-center text-sea">
            <a href="#about" className="hover:underline py-2">01. About</a>
            <a href="#projects" className="hover:underline py-2">02. Projects</a>
            <a href="#certs" className="hover:underline py-2">03. Certifications</a>
            <a href="#contact" className="hover:underline py-2">04. Contact</a>

            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                setShowResume(true);
                setIsMenuOpen(false);
              }}
              className="mt-4 border border-sea text-sea px-4 py-2 rounded-md w-full text-center
                         hover:bg-sea hover:text-slate-900 transition"
            >
              Resume
            </button>
          </nav>
        </div>
      </header>

      {/* ---------------- RESUME OVERLAY ---------------- */}
      {showResume && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center 
                        bg-black/70 backdrop-blur-xl animate-fadeIn">

          {/* Action Buttons */}
          <div className="absolute top-6 right-6 flex gap-4">

          

            {/* Close */}
            <button
              onClick={() => setShowResume(false)}
              className="px-4 py-2 bg-red-500/30 backdrop-blur-md border border-red-500/40 
                         text-red-300 rounded-lg hover:bg-red-500/40 transition text-sm font-semibold"
            >
              ✕ Close
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto mt-10
              rounded-2xl bg-[#0f172a]/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)]
              border border-white/10 animate-fadeIn overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 
                  bg-[#1e293b]/70 border-b border-white/10">
                  
                  <h2 className="text-lg text-white font-semibold tracking-wide flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                      <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      
                      <span className="ml-4">My Resume</span>
                  </h2>

                  <a
                      href="/Nishok-SOC_Resume.pdf"
                      download
                      className="px-4 py-1 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 
                          text-white text-sm transition-all shadow-lg"
                  >
                      Download
                  </a>
              </div>

              {/* PDF Display Box */}
              <div className="w-full h-[85vh] bg-[#0b1220] flex items-center justify-center">
                  <object
                      data="/Nishok-SOC_Resume.pdf"
                      type="application/pdf"
                      className="w-full h-full rounded-b-2xl"
                  >
                      <p className="text-white text-center">
                          PDF cannot be displayed.  
                          <a
                              href="/Nishok-SOC_Resume.pdf"
                              className="underline text-blue-400"
                              download
                          >
                              Click here to download.
                          </a>
                      </p>
                  </object>
              </div>
          </div>

        </div>
      )}
    </>
  );
}
