import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-light relative">
      <Navbar />
      <Sidebar />
      <main className="max-w-6xl mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Footer />
      </main>
    </div>
  )
}