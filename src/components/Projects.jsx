import React from 'react';

const projects = [
  {
    title: 'Hands-on Elastic SIEM',
    timeframe: '2024 - Present',
    bullets: [
      'Configured and deployed Elastic SIEM (ELK) with Winlogbeat on Windows endpoints.',
      'Implemented secure log ingestion (SSL/TLS) and tuned correlation rules for detection.',
      'Tracked attack techniques mapped to MITRE ATT&CK.',
    ],
  },
  {
    title: 'PCAP Incident Analysis',
    timeframe: '2025',
    bullets: [
      'Analyzed phishing email incident using Wireshark to discover data exfiltration.',
      'Enriched IOCs and produced blue-team incident report aligning with SANS guides.',
    ],
  },
  {
    title: 'Windows Keylogger (C++)',
    timeframe: '2025',
    bullets: [
      'Built keylogger using API hooking techniques with obfuscation for testing & research.',
      'Developed multi-threaded, synchronized logging to local storage for analysis purposes.',
      'Implemented secure log ingestion (SSL/TLS) and tuned correlation rules for detection.',
      'Tracked attack techniques mapped to MITRE ATT&CK.',
    ],
  },
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = React.useState(0);

  return (
    <section id="projects" className="pb-12 mb-12 pt-28 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sea font-mono text-lg mb-10">02. Projects</h2>

        <div className="flex flex-col md:flex-row gap-0">
          {/* Sidebar Tabs */}
          <ul className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-700 text-sm font-mono">
            {projects.map((project, index) => (
              <li
                key={index}
                className={`cursor-pointer px-4 py-3 md:px-6 md:py-2 transition-colors ${
                  activeProject === index
                    ? 'text-sea border-b-2 md:border-b-0 md:border-l-2 border-sea bg-slate-800/30'
                    : 'text-slate-400 hover:text-slate-200 border-b-2 md:border-b-0 md:border-l-2 border-transparent'
                }`}
                onClick={() => setActiveProject(index)}
              >
                {project.title}
              </li>
            ))}
          </ul>

          {/* Project Content */}
          <div className="md:w-3/4 min-h-[320px] flex flex-col justify-start">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${activeProject === index ? 'block' : 'hidden'} w-full`}
              >
                <h3 className="text-2xl font-bold text-slate-200 mb-2 mt-4"> {/* Added margin-top to create space */}
                  {project.title}
                </h3>
                <p className="text-slate-400 font-mono text-sm mb-6">
                  {project.timeframe}
                </p>
                <ul className="space-y-3">
                  {project.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-slate-400 flex items-start">
                      <span className="text-sea mr-2">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
