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
              a passionate and driven SOC Analyst with a deep curiosity for how systems operate and how to secure them. 
              My journey started in web development, where I worked with React and PHP. However, my growing interest in security 
              led me to transition into Security Operations (SOC), where I could apply my problem-solving skills to protect systems and data.
            </p>

            <p className="text-slate-400 mb-4">
              I gained hands-on experience through an internship at NullClass, where I worked in Security Operations 
              and honed my skills in incident handling, detection engineering, and threat hunting. 
              Additionally, I earned a certification from Selfmade Ninja Academy (SNA), which solidified my expertise in cybersecurity.
            </p>

            <p className="text-slate-400 mb-4">
              I hold a B.E. in Computer Science from SRM Valliammai Engineering College (2020–2024) and 
              have completed my M.E. in Computer Science at Panimalar Engineering College (2024–2026).
            </p>

            <p className="text-slate-400 mb-6">
              I’m focused on building robust detection rules, investigating security incidents, and strengthening defenses 
              to proactively mitigate threats. I’m always eager to learn and grow in this ever-evolving field, 
              and I’m excited to contribute my skills to a dynamic, collaborative team.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-2 gap-x-12 mt-6 text-slate-400 font-mono text-sm">
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Elastic SIEM & Splunk</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Wazuh</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Incident Investigation</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Windows & Linux Internals</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Network Fundamentals</li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> MITRE ATT&CK Framework</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Malware Analysis</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> YARA | Sigma Rule Building</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> C/C++, PHP, Python</li>
                <li className="flex items-center"><span className="text-sea mr-2">▹</span> Powershell, Bash</li>
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
