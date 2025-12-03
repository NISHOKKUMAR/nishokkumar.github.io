import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="py-12 text-slate">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-light font-semibold text-lg">Get in touch</h4>
          <p className="text-slate">Email: <a href="mailto:nishokkumar96@gmail.com" className="text-sea">nishokkumar96@gmail.com</a></p>
          <p className="text-slate">LinkedIN: <a href="https://www.linkedin.com/in/nishokkumars/" className="text-sea">Nishok Kumar S</a></p>
          <p className="text-slate">GitHub: <a href="https://github.com/NISHOKKUMAR" className="text-sea">NISHOKKUMAR</a></p>
        </div>

        <div className="text-sm text-slate">
          <p>Built by Nishok Kumar S © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
