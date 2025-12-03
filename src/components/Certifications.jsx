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
  const [activeSub, setActiveSub] = React.useState(null); // NEW: controls dynamic content

  return (
    <section id="certs" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sea font-mono text-lg mb-12">03. Certifications</h2>

        <div className="space-y-24">
          {certificates.map((cert, index) => {
            // Detect if the current cert has subCerts
            const isMultiCert = cert.subCerts && cert.subCerts.length > 0;

            // Determine displayed text (dynamic for SNA)
            const displayedContent =
              isMultiCert && activeSub
                ? activeSub
                : cert;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* ===========================
                    IMAGE SECTION
                ============================ */}
                <div className="md:w-1/2 relative group h-[350px]">

                  {/* Case 1: Simple certificate */}
                  {!isMultiCert && (
                    <>
                      <img
                        src={cert.img}
                        alt={cert.name}
                        className="rounded-lg shadow-lg object-cover w-full h-full group-hover:scale-[1.02] transition"
                      />
                      <div className="absolute inset-0 bg-slate-900/30 rounded-lg opacity-0 group-hover:opacity-100 transition" />
                    </>
                  )}

                  {/* Case 2: Multi-cert (LAHTP) */}
                  {isMultiCert && (
                    <div className="grid grid-cols-3 gap-3 h-full">
                      {cert.subCerts.map((sub, i) => (
                        <div
                          key={i}
                          className="relative group cursor-pointer"
                          onClick={() => setActiveSub(sub)} // update right side
                        >
                          <img
                            src={sub.img}
                            alt={sub.label}
                            className="rounded-lg object-cover h-full w-full"
                          />

                          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition text-white text-xs font-mono text-center p-2">
                            {sub.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* ===========================
                    TEXT SECTION (Dynamic for SNA)
                ============================ */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-slate-200 mb-4">
                    {isMultiCert && activeSub ? activeSub.label : cert.name}
                  </h3>

                  <p className="text-slate-400 mb-6">{displayedContent.description}</p>

                  <ul className="flex flex-wrap gap-3 text-sm font-mono text-sea">
                    {displayedContent.keywords.map((kw, i) => (
                      <li
                        key={i}
                        className="bg-slate-800 px-3 py-1 rounded-lg border border-slate-700"
                      >
                        {kw}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
