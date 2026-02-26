import { useState } from 'react'

const contactLinks = [
  {
    label: 'GitHub',
    value: 'github.com/isaac',
    href: 'https://github.com/isaac',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/isaac',
    href: 'https://linkedin.com/in/isaac',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'isaac@email.com',
    href: 'mailto:isaac@email.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    // Simulate sending for now — Phase 2 will connect this to Node.js backend
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="py-28 px-6 bg-gray-950 relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/30 px-3 py-1 rounded">
            Contact
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-5 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-3">
            Open to opportunities, collaborations, or just a conversation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Contact Info */}
          <div className="space-y-8">
            <p className="font-mono text-sm text-gray-400 leading-relaxed">
              I'm currently open to backend developer roles and freelance projects.
              Whether you have a job opportunity, a project idea, or just want to
              connect — feel free to reach out.
            </p>

            {/* Links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg bg-gray-900/40 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-200 group"
                >
                  <span className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-200">
                    {link.icon}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-0.5">
                      {link.label}
                    </p>
                    <p className="font-mono text-sm text-gray-300 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.value}
                    </p>
                  </div>
                  <svg className="w-4 h-4 ml-auto text-gray-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/40">
            <p className="font-mono text-xs text-gray-600 uppercase tracking-widest mb-6">
              Send a message
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-gray-950 border border-gray-700 rounded px-4 py-3 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-950 border border-gray-700 rounded px-4 py-3 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-mono text-xs text-gray-500 mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Isaac, I'd like to talk about..."
                  rows={5}
                  className="w-full bg-gray-950 border border-gray-700 rounded px-4 py-3 font-mono text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors duration-200 resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400">
                  Please fill in all fields before sending.
                </p>
              )}
              {status === 'sent' && (
                <p className="font-mono text-xs text-cyan-400">
                  Message sent! I'll get back to you soon.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-cyan-400 text-gray-950 font-mono font-bold text-sm rounded hover:bg-cyan-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}