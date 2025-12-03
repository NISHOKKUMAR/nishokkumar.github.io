import React from 'react'

export default function Hero(){
  return (
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
      Aspiring SOC Analyst with hands-on experience in Incident Handling, Detection Engineering, and Threat Hunting, 
      gained through self-driven projects and labs. Proficient in SIEM tools (Splunk, ELK, Wazuh), 
      with strong knowledge of Linux, Windows, and Network Security. Skilled in C/C++, PHP, and 
      scripting languages like Python, Bash, and PowerShell. Eager to contribute to a collaborative SOC team, 
      apply problem-solving skills, and drive security improvements.
    </p>
    <div className="flex gap-4">
      <a
        href="/SOC_Nishok_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-sea text-sea rounded hover:bg-sea hover:text-slate-900 transition"
      >
        Resume
      </a>
      <a
        href="#contact"
        className="px-6 py-3 border border-slate-600 text-slate-400 rounded hover:bg-slate-600 hover:text-slate-100 transition"
      >
        Contact
      </a>
    </div>
  </div>
</section>

  )
}
