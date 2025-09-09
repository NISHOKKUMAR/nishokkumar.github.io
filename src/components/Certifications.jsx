import React from "react";

const certificates = [
  {
    name: "SOC Internship - NullClass",
    img: "/certs/cert1.png", // replace with your certificate image
    description:
      "Worked on real-world SOC tasks including log analysis, incident detection, and SIEM rule creation. Gained hands-on experience with threat hunting workflows.",
    keywords: ["Elastic SIEM", "Threat Hunting", "Incident Response"],
  },
  {
    name: "Learn the Art of Hacking Through Programming - SNA",
    img: "/certs/cert2.png",
    description:
      "Completed a practical course focusing on security through coding. Learned API hooking, low-level C/C++ techniques, and exploit fundamentals.",
    keywords: ["C/C++", "API Hooking", "Exploit Basics"],
  },
  {
    name: "PCAP Analysis Workshop",
    img: "/certs/cert3.png",
    description:
      "Learned packet-level analysis using Wireshark and The Sleuth Kit. Investigated phishing scenarios, credential theft, and data exfiltration.",
    keywords: ["Wireshark", "PCAP Analysis", "The Sleuth Kit"],
  },
];

export default function CertificatesSection() {
  return (
    <section id="certs" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-sea font-mono text-lg mb-12">03. Certifications</h2>

        <div className="space-y-24">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative group h-[350px]">
                <img
                  src={cert.img}
                  alt={cert.name}
                  className="rounded-lg shadow-lg object-cover w-full h-full group-hover:scale-[1.02] transition"
                />
                <div className="absolute inset-0 bg-slate-900/30 rounded-lg opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Text Content */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                  {cert.name}
                </h3>
                <p className="text-slate-400 mb-6">{cert.description}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
