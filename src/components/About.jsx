import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 mb-0">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-sea font-mono text-lg mb-2">01. About Me</h2>
        <h3 className="text-3xl font-bold text-slate-200 mb-6">About Me</h3>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <p className="text-slate-400 mb-4">
              Hello! I’m <span className="font-semibold text-slate-200">Nishok Kumar</span>, 
              a curious person who loves learning how systems work and how to secure them. 
              I transitioned from React & PHP web development into Security Operations.
            </p>

            <p className="text-slate-400 mb-4">
              I completed an internship at <span className="font-semibold">NullClass</span> in SOC 
              and earned a certification from 
              <span className="font-semibold"> Selfmade Ninja Academy (SNA)</span>. 
              I completed B.E at SRM Valliammai Engineering College (2024) and 
              M.E at Panimalar Engineering College (2026).
            </p>

            <p className="text-slate-400 mb-6">
              My current focus is building detection rules, analyzing incidents, and 
              strengthening defenses as a SOC Analyst.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-2 gap-x-12 mt-6 text-slate-400 font-mono text-sm">
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> ElasticSearch (SIEM)</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Linux (Ubuntu & RedHat)</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> YARA</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> C / C++</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Bash</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> MITRE ATT&CK Framework</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Networks</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> The Sleuth Kit</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Python</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> PHP</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="placeholder.png"   // replace with your photo later
                alt="Nishok Kumar"
                className="rounded-lg relative z-10 w-full max-w-[400px] mx-auto"
              />
              <div className="absolute top-3 left-3 w-full h-full border-2 border-sea rounded-lg -z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
