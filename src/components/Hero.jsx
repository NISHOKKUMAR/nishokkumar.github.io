import React, { useState } from "react";

export default function Hero() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section
        id="hero"
        className="flex items-center min-h-screen px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-3xl">
          <p className="text-sea mb-4">Hi, my name is</p>

          <h1 className="text-5xl font-extrabold text-slate-200 mb-2">
            Nishok Kumar S.
          </h1>

          <h2 className="text-4xl font-bold text-slate-400 mb-6">
            I protect systems.
          </h2>

          <p className="text-slate-400 leading-relaxed mb-6">
            Aspiring SOC Analyst with hands-on experience in Incident Handling,
            Detection Engineering, and Threat Hunting, gained through
            self-driven projects and labs. Proficient in SIEM tools (Splunk, ELK,
            Wazuh), with strong knowledge of Linux, Windows, and Network
            Security. Skilled in C/C++, PHP, and scripting languages like Python,
            Bash, and PowerShell. Eager to contribute to a collaborative SOC team
            and drive security improvements.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setShowResume(true)}
              className="px-6 py-3 border border-sea text-sea rounded 
                         hover:bg-sea hover:text-slate-900 transition"
            >
              Resume
            </button>

            <a
              href="#contact"
              className="px-6 py-3 border border-slate-600 text-slate-400 rounded 
                         hover:bg-slate-600 hover:text-slate-100 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- RESUME MODAL (Same as NAVBAR) ---------------- */}
      {showResume && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center 
                        bg-black/70 backdrop-blur-xl animate-fadeIn">

          {/* Close Button (top-right) */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setShowResume(false)}
              className="px-4 py-2 bg-red-500/30 backdrop-blur-md border border-red-500/40 
                         text-red-300 rounded-lg hover:bg-red-500/40 transition text-sm font-semibold"
            >
              ✕ Close
            </button>
          </div>

          {/* Main Viewer */}
          <div className="w-[95%] md:w-[80%] lg:w-[70%] mx-auto mt-10
              rounded-2xl bg-[#0f172a]/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.45)]
              border border-white/10 animate-fadeIn overflow-hidden">

              {/* Header Bar */}
              <div className="flex items-center justify-between px-6 py-4 
                  bg-[#1e293b]/70 border-b border-white/10">

                  {/* Mac OS Dots + Title */}
                  <div className="flex items-center gap-2 text-white font-semibold tracking-wide text-lg">
                      <span className="h-3 w-3 rounded-full bg-red-500"></span>
                      <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                      <span className="h-3 w-3 rounded-full bg-green-500"></span>
                      <span className="ml-4">My Resume</span>
                  </div>

                  {/* Download Button */}
                  <a
                    href="/Nishok-SOC_Resume.pdf"
                    download
                    className="px-4 py-1 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 
                        text-white text-sm transition-all shadow-lg"
                  >
                    Download
                  </a>
              </div>

              {/* PDF Area */}
              <div className="w-full h-[85vh] bg-[#0b1220] flex items-center justify-center">
                  <object
                    data="/Nishok-SOC_Resume.pdf"
                    type="application/pdf"
                    className="w-full h-full rounded-b-2xl"
                  >
                      <p className="text-white text-center p-6">
                          PDF cannot be displayed.{" "}
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
