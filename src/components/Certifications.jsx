import React from "react";

const certificates = [
  {
    name: "SOC Internship - NullClass",
    img: "/certs/NullClass-Cybersecurity-Internship-Certificate.png",
    description:
      "Worked on real-world SOC tasks including log analysis, incident detection, and Detection Engineering (Splunk, Elastic SIEM). Gained hands-on experience with threat hunting workflows.",
    keywords: ["Elastic SIEM", "Splunk", "Incident Handling", "Detection Engineering", "Threat Hunting"],
  },

  // ================================
  //       LAHTP – multi cert block
  // ================================
  {
    name: "Learn the Art of Hacking Through Programming - SNA",

    // Default (selected if no subCert clicked)
    description:
      "Completed the LAHTP track under SNA consisting of Legacy, Advanced, and Web Hacking certifications. Learned exploit development fundamentals, API hooking and modern web vulnerabilities.",
    keywords: ["C/C++", "API Hooking", "Exploit Basics", "Web Security"],

    // NEW: each certificate now has its own description & keywords
    subCerts: [
      {
        label: "Legacy Certification",
        img: "/certs/LAHTP_Legacy.png",
        description:
          "Gained foundational knowledge in C/C++ programming and PHP (Laravel) for secure web development. Delved into operating system fundamentals, including Linux and Windows internals, and honed skills in Linux command-line usage and scripting languages like Bash, Python, and PowerShell. Explored debugging with GDB and developed proficiency in writing x86_64 assembly, enhancing my understanding of low-level programming and system security.",
        keywords: ["C/C++", "PHP", "Secure Coding","Linux & Windows Internals", "Python", "Powershell"],
      },
      {
        label: "Advanced Certification",
        img: "/certs/LAHTP_Advance.png",
        description:
          "Gained hands‑on experience developing security tools, including a privilege‑escalation detection tool, an Nmap‑style network scanner, a Windows keylogger using API hooking, and a mini intrusion‑detection system (IDS). Built a real‑time chat application using sockets. Additionally learned the fundamentals of malware analysis (static and dynamic) and the basics of binary exploitation.",
        keywords: ["Tool Building", "Network Scanner", "Socket Programming", "Windows Keylogger", "Malware Analysis", "Binary Exploitation"],
      },
      {
        label: "Web Hacking Certification",
        img: "/certs/LAHTP_Web_Hacking.png",
        description:
          "Learnt about major web vulnerabilities and how they are exploited in real-world scenarios. Built custom web penetration‑testing tools in Python, including a Subdomain Enumerator, Directory Brute‑Forcer, and HTTP Header Analyzer using libraries such as requests, beautifulsoup4, Scapy, urllib, asyncio, and colorama. Gained hands‑on experience in identifying and understanding security flaws like XSS, SQLi, SSRF, and authentication weaknesses, while also learning best practices to secure web applications and protect against common vulnerabilities.",
        keywords: ["Web Penetration Testing", "Web Vulnerabilities", "Security Flaws", "Best Practices", "Python Libraries"],
      },
    ],
  },

];

export default function CertificatesSection() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % certificates.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );

  const cert = certificates[index];

  return (
    <section id="certs" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sea font-mono text-lg mb-12">
          03. Certifications
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-slate-200 mb-4">
              {cert.name}
            </h3>

            <p className="text-slate-400 mb-6">
              {cert.description}
            </p>

            <ul className="flex flex-wrap gap-3 text-sm font-mono text-sea">
              {cert.keywords.map((kw, i) => (
                <li
                  key={i}
                  className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CERTIFICATE IMAGE + NAV */}
          <div className="md:w-1/2 relative flex items-center justify-center">

            {/* LEFT ARROW */}
            <button
              onClick={prev}
              className="absolute left-0 text-sea text-3xl hover:text-white transition"
            >
              ◀
            </button>

            {/* IMAGE */}
            <div className="w-[380px] h-[500px] rounded-xl overflow-hidden shadow-xl border border-slate-700 bg-slate-900">
              <img
                src={cert.img}
                alt={cert.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={next}
              className="absolute right-0 text-sea text-3xl hover:text-white transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}