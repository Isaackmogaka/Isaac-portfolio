import { useEffect, useRef } from 'react'

const timelineData = [
  {
    year: '2024',
    title: 'Started My Backend Journey',
    description:
      'Began learning PHP and understanding how servers handle requests and databases. Dived into core programming logic, HTTP methods, and how the web works under the hood.',
    tags: ['PHP', 'MySQL', 'HTTP', 'Linux'],
  },
  {
    year: '2025',
    title: 'Learned Laravel & REST APIs',
    description:
      'Built structured backend applications using Laravel — routing, controllers, middleware, and database logic with Eloquent ORM. Learned to design and document clean REST APIs.',
    tags: ['Laravel', 'REST API', 'Eloquent', 'Postman'],
  },
  {
    year: '2026',
    title: 'Developed Money Tracker API',
    description:
      'Designed and implemented a wallet-based transaction system with proper balance calculations and clean API structure. Focused on validation, edge cases, and real-world architecture.',
    tags: ['Laravel', 'Wallet System', 'Transactions', 'API Design'],
  },
]

export default function History() {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0')
            entry.target.classList.remove('opacity-0', '-translate-x-6')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="history" className="py-28 px-6 bg-gray-900 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/30 px-3 py-1 rounded">
            Timeline
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-5 tracking-tight">
            My Journey
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-3">
            How I got into backend development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative pl-12 opacity-0 -translate-x-6 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-gray-900 group-hover:bg-cyan-400 transition-colors duration-300" />

                {/* Connector */}
                <div className="absolute left-4 top-[11px] w-6 h-px bg-gray-700" />

                {/* Card */}
                <div className="border border-gray-800 rounded-lg p-6 bg-gray-950/60 hover:border-cyan-400/30 transition-all duration-300 group">

                  {/* Year badge */}
                  <span className="inline-block font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 rounded mb-4">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="font-mono text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-mono text-sm text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
