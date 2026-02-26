const stats = [
  { label: 'Year Started', value: '2024' },
  { label: 'Projects Built', value: '5+' },
  { label: 'APIs Developed', value: '3+' },
  { label: 'Commits Made', value: '100+' },
]

const facts = [
  'I started my backend journey in 2024 with PHP and never looked back.',
  'I enjoy understanding how systems work under the hood — routing, databases, auth.',
  'Currently deepening my Laravel knowledge and exploring Node.js.',
  'I believe clean code and clear API design matter as much as making things work.',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-950 relative overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/30 px-3 py-1 rounded">
            About Me
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-5 tracking-tight">
            Who I Am
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-3">
            A little background on me and what drives me
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Bio */}
          <div className="space-y-5">
            {facts.map((fact, i) => (
              <div key={i} className="flex gap-4 items-start group">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 group-hover:scale-150 transition-transform duration-200" />
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {fact}
                </p>
              </div>
            ))}

            {/* Currently learning */}
            <div className="mt-8 p-4 border border-gray-800 rounded bg-gray-900/50">
              <p className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-2">
                Currently Learning
              </p>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Node.js, Express, REST API design, and how to connect frontend and backend into full working systems.
              </p>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-800 rounded p-6 bg-gray-900/40 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <p className="font-mono text-3xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-200 inline-block">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-gray-500 mt-2 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Location card */}
            <div className="col-span-2 border border-gray-800 rounded p-5 bg-gray-900/40 flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">Based In</p>
                <p className="font-mono text-sm text-gray-300 mt-0.5">Kenya 🇰🇪</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
