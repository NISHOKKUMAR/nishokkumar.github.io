import React from 'react';

const projects = [
  {
    title: 'Hands-on Elastic SIEM',
    timeframe: '2025 JUNE ',
    bullets: [
      'Configured and deployed Elastic SIEM (ELK stack) with Winlogbeat on Windows endpoints for centralized logging.',
      'Enabled real-time monitoring of security events across endpoints with Elastic SIEM.',
      'Implemented secure log ingestion using SSL/TLS encryption for data confidentiality and integrity.',
      'Tuned and optimized correlation rules based on threat intelligence feeds and use case needs.',
      'Developed detection rules aligned with the MITRE ATT&CK framework to identify attack techniques.',
      'Focused on detecting attacks such as brute force, data exfiltration, and unauthorized logins.',
      'Created custom Kibana dashboards to visualize key security metrics, enhancing situational awareness.'
    ],
  },
  {
    title: 'PCAP Incident Analysis',
    timeframe: '2025 JULY',
    bullets: [
      'Conducted a detailed analysis of a phishing email incident using a captured PCAP file.',
      'Examined network traffic in Wireshark and identified signs of data exfiltration over SMTP.',
      'Enriched key IOCs, including IP addresses, domains, and file hashes.',
      'Compiled a comprehensive blue‑team incident report following SANS best practices.',
      'Identified C2 communication patterns to map the attack timeline and overall scope.'
    ],
  },
  {
    title: 'Windows Keylogger (C++)',
    timeframe: '2024 NOVEMBER',
    bullets: [
      'Developed a keylogger in C++ using low‑level API hooking to intercept keyboard inputs.',
      'Implemented multi‑threaded, synchronized keystroke logging for secure and efficient data storage.',
      'Captured keystrokes with active window names and timestamps to provide target activity context.',
      'Applied obfuscation techniques to reduce detection by basic antivirus tools.',
      
    ],
  },
  {
    title: 'Security Tools',
    timeframe: '2024 NOVEMBER',
    bullets: [
      'Designed a custom Nmap‑style network scanner to identify devices, open ports, and services for security assessment.',
      'Built a mini IDS to detect suspicious traffic patterns and provide real‑time intrusion alerts.',
      'Developed a privilege‑escalation detection tool to identify misconfigurations and vulnerable services.',
      'Created a real‑time socket‑based chat application to strengthen understanding of networking protocols.',
      'Designed all tools to be modular and flexible for future updates and integration into larger security frameworks.'
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
