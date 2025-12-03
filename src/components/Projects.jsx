import React from 'react';

const projects = [
  {
    title: 'Hands-on Elastic SIEM',
    timeframe: '2025 JUNE ',
    bullets: [
      'Configured and deployed Elastic SIEM (ELK stack) with Winlogbeat on Windows endpoints, enabling centralized logging and real-time monitoring of security events.',
      'Implemented secure log ingestion using SSL/TLS encryption to ensure confidentiality and integrity of log data during transmission.',
      'Tuned and optimized correlation rules based on threat intelligence feeds and use case requirements to improve detection accuracy.',
      'Developed detection rules aligned with MITRE ATT&CK framework, focusing on detecting known attack techniques such as brute force, data exfiltration, and unauthorized login attempts.',
      'Created custom Kibana dashboards to visualize key security metrics, such as brute force attempts, data exfiltration patterns, and authentication/login activity, improving situational awareness for security teams.',
    ],
  },
  {
    title: 'PCAP Incident Analysis',
    timeframe: '2025 JULY',
    bullets: [
      'Conducted a detailed analysis of a phishing email incident by captured PCAP File, analyzed network traffic using Wireshark, uncovering evidence of data exfiltration over HTTP/HTTPS protocols.',
      'Enriched Indicators of Compromise (IOCs) such as IP addresses, domains, and file hashes, then compiled a comprehensive blue-team incident report following industry best practices outlined by SANS.',
      'Used network traffic analysis to identify command and control (C2) communication patterns, helping to map out the attack timeline and scope.',
    ],
  },
  {
    title: 'Windows Keylogger (C++)',
    timeframe: '2024 NOVEMBER',
    bullets: [
      'Developed a keylogger application using low-level API hooking techniques in C++, allowing for the interception by API Hooking.',
      'Implemented multi-threaded, synchronized logging of keystrokes, enabling secure and efficient storage of data locally for further analysis.',
      'Integrated features to record key presses along with associated window names (Active Window) and timestamps, providing context for each action, making it valuable for security investigations.',
      'Applied obfuscation techniques to prevent detection by basic antivirus software and make the keylogger more stealthy in a real-world attack scenario.',
    ],
  },
  {
    title: 'Security Tools',
    timeframe: '2024 NOVEMBER',
    bullets: [
      'Designed and developed a custom network scanning tool similar to Nmap, enabling users to discover devices, open ports, and services on a network to assess security posture.',
      'Built a Mini Intrusion Detection System (IDS) to detect suspicious network traffic patterns and potential intrusions, providing real-time alerts on anomalous activities.',
      'Developed a Privilege Escalation Detection Tool to help identify common vectors for privilege escalation attacks, such as misconfigured permissions and vulnerable services.',
      'Created a real-time chat application using sockets to enhance understanding of networking protocols and real-time data transfers.',
      'Ensured each tool was modular and flexible, allowing for future updates and integration with larger security frameworks.',
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
