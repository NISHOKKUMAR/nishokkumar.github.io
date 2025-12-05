import React, { useState } from "react";

const data = [
  {
    title: "SOC Internship - NullClass",
    img: "certs/NullClass-Cybersecurity-Internship-Certificate.png",
    description: [
      "Hands-on SOC experience analysing logs & security events.",
      "Worked on real-world incident detection & triage.",
      "Developed detection rules and performed threat hunting.",
      "Used Elastic SIEM, Splunk, Wazuh in lab environments."
    ],
    keywords: [
      "Elastic SIEM",
      "Splunk",
      "Incident Handling",
      "Detection Engineering",
      "Threat Hunting",
    ],
  },

  {
    title: "Learn the Art of Hacking Through Programming – SNA",
    subCerts: [
      {
        name: "Legacy Certification",
        img: "certs/LAHTP_Legacy.png",
        description: [
          "Acquired foundational knowledge in C/C++, PHP (Laravel), and secure coding for web development.",
          "Explored OS fundamentals, including Linux/Windows internals, and honed command-line skills.",
          "Developed proficiency in Bash, Python, and PowerShell scripting languages.",
          "Learned debugging with GDB and wrote x86_64 assembly to enhance low-level programming skills."
        ],
        keywords: ["C/C++", "PHP", "Secure Coding","Linux & Windows Internals", "Python", "Powershell"],
      },
      {
        name: "Advanced Certification",
        img: "certs/LAHTP_Advance.png",
        description: [
          "Gained hands-on experience developing security tools, including a privilege-escalation detection tool and an Nmap-style network scanner.",
          "Created a Windows keylogger using API hooking and built a mini intrusion-detection system (IDS).",
          "Developed a real-time chat application using sockets.",
          "Learned fundamentals of malware analysis (static and dynamic) and basics of binary exploitation."
        ],
        keywords: ["Tool Building", "Network Scanner", "Socket Programming", "Windows Keylogger", "Malware Analysis", "Binary Exploitation"],
      },
      {
        name: "Web Hacking Certification",
        img: "certs/LAHTP_Web_Hacking.png",
        description: [
          "Learned major web vulnerabilities and how they're exploited in real scenarios.",
          "Built Python pentest tools: subdomain enum, dir brute‑forcer, header analyzer, etc.",
          "Used requests, bs4, Scapy, urllib, asyncio, colorama to build all these tools.",
          "Gained hands-on experience with XSS, SQLi, SSRF, and secure web‑app best practices."
        ],
        keywords: ["Web Penetration Testing", "Web Vulnerabilities", "Sequrity Flaws", "Best Practices", "Python Libraries"],
      },
    ],
  },
];

export default function Certifications() {
  const [subIndex, setSubIndex] = useState(0);

  const lahtp = data[1];

  const next = () =>
    setSubIndex((prev) =>
      prev + 1 >= lahtp.subCerts.length ? 0 : prev + 1
    );

  const prev = () =>
    setSubIndex((prev) =>
      prev - 1 < 0 ? lahtp.subCerts.length - 1 : prev - 1
    );

  return (
    <section id="certs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <h2 className="text-sea font-mono text-lg mb-12">03. Certifications</h2>

        {/* ------------------------------------- */}
        {/* 1️⃣ NULLCLASS CERTIFICATE (STATIC) */}
        {/* ------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">

          {/* TEXT SECTION */}
          <div>
            <h3 className="text-3xl font-bold text-slate-200 mb-4">
              {data[0].title}
            </h3>

            <ul className="text-slate-400 mb-6 space-y-2">
              {data[0].description.map((line, idx) => (
                <li key={idx} className="flex">
                  <span className="text-sea mr-2">▹</span> {line}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-3 text-sm font-mono text-sea">
              {data[0].keywords.map((key, i) => (
                <li
                  key={i}
                  className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-[520px] h-[350px] rounded-xl overflow-hidden shadow-xl border border-slate-700 bg-slate-900">
              <img
                src={data[0].img}
                className="w-full h-full object-contain p-3"
                alt="NullClass Certificate"
              />
            </div>
          </div>
        </div>

        {/* ------------------------------------- */}
        {/* 2️⃣ LAHTP CERTIFICATION (SLIDER) */}
        {/* ------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT: CERTIFICATE SLIDER */}
          <div className="relative flex justify-center">

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-sea text-4xl hover:text-white"
            >
              ◀
            </button>

            {/* CERT FRAME */}
            <div className="w-[520px] h-[350px] rounded-xl overflow-hidden shadow-xl border border-slate-700 bg-slate-900">
              <img
                src={lahtp.subCerts[subIndex].img}
                className="w-full h-full object-contain p-3"
                alt="LAHTP Certificate"
              />
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-sea text-4xl hover:text-white"
            >
              ▶
            </button>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div>
            <h3 className="text-3xl font-bold text-slate-200 mb-2">
              {lahtp.title}
            </h3>

            <h4 className="text-xl text-sea mb-4 font-semibold">
              {lahtp.subCerts[subIndex].name}
            </h4>

            <ul className="text-slate-400 mb-6 space-y-2">
              {lahtp.subCerts[subIndex].description.map((line, idx) => (
                <li key={idx} className="flex">
                  <span className="text-sea mr-2">▹</span> {line}
                </li>
              ))}
            </ul>

            <ul className="flex flex-wrap gap-3 text-sm font-mono text-sea">
              {lahtp.subCerts[subIndex].keywords.map((key, i) => (
                <li
                  key={i}
                  className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
                >
                  {key}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
