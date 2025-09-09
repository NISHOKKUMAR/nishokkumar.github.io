import React from 'react'

export default function Sidebar() {
  return (
    <aside className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20">
      {/* GitHub */}
      <a
        href="https://github.com/NISHOKKUMAR"
        target="_blank"
        rel="noreferrer"
        className="text-slate hover:text-sea transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M12 .297a12 12 0 0 0-3.794 23.4c.6.111.82-.261.82-.58v-2.234c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.086 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.527.116-3.183 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.654 1.656.242 2.88.118 3.183.77.84 1.235 1.911 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576A12 12 0 0 0 12 .297Z"
            clipRule="evenodd"
          />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/nishokkumars/"
        target="_blank"
        rel="noreferrer"
        className="text-slate hover:text-sea transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M4.98 3.5C4.98 5 3.9 6.1 2.4 6.1h-.03C.9 6.1 0 5 0 3.5 0 2 1.08.9 2.58.9c1.5 0 2.4 1.1 2.4 2.6zM.3 24h4.8V7.8H.3V24zm7.6 0h4.6v-8.3c0-.5.04-1 .2-1.4.44-1 1.45-2 3.15-2 2.22 0 3.1 1.5 3.1 3.8V24h4.6v-8.9c0-4.8-2.6-7-6.1-7-2.8 0-4 1.6-4.7 2.7h.1V7.8h-4.6c.06 1.3 0 16.2 0 16.2z"/>
        </svg>
      </a>

      {/* Twitter (X) */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="text-slate hover:text-sea transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M23.95 4.57c-.885.39-1.83.65-2.825.77a4.93 4.93 0 0 0 2.163-2.724c-.95.56-2.005.97-3.127 1.19A4.92 4.92 0 0 0 16.616 3c-2.72 0-4.924 2.2-4.924 4.92 0 .39.045.77.127 1.13-4.09-.2-7.72-2.16-10.15-5.13a4.9 4.9 0 0 0-.67 2.48c0 1.7.87 3.2 2.19 4.08a4.9 4.9 0 0 1-2.23-.62v.06c0 2.37 1.7 4.34 3.95 4.78a4.9 4.9 0 0 1-2.22.08c.63 2 2.44 3.46 4.6 3.5A9.86 9.86 0 0 1 0 19.54a13.9 13.9 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64c.96-.7 1.8-1.56 2.4-2.55z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/nishok_96/"
        target="_blank"
        rel="noreferrer"
        className="text-slate hover:text-sea transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
      </a>

      {/* Vertical line */}
      <div className="w-px h-24 bg-slate mt-6"></div>
    </aside>
  )
}
