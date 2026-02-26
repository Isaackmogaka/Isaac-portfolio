import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About',   href: '#about'   },
  { label: 'History', href: '#history' },
  { label: 'Skills',  href: '#skills'  },
  { label: 'Blog',    href: '#blog'    },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" onClick={(e) => handleNavClick(e, 'body')} className="font-mono text-cyan-400 font-bold text-lg tracking-widest hover:text-cyan-300 transition-colors">
          Isaac.dev
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hidden md:inline-block text-sm font-mono px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-gray-950 transition-all duration-200 tracking-wide">
          Hire Me
        </a>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </nav>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col px-6 pb-6 gap-4 border-t border-gray-800 pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="block text-sm font-mono text-gray-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-block text-sm font-mono px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-gray-950 transition-all duration-200">
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
