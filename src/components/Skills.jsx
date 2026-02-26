import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'Node.js', level: 50 },
      { name: 'Express', level: 45 },
      { name: 'REST API Design', level: 70 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 75 },
      { name: 'SQLite', level: 60 },
      { name: 'Database Design', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React', level: 40 },
      { name: 'Tailwind CSS', level: 50 },
      { name: 'HTML & CSS', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 70 },
      { name: 'Linux / CLI', level: 65 },
      { name: 'Postman', level: 75 },
    ],
  },
]

function SkillBar({ name, level }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${level}%`
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (barRef.current) observer.observe(barRef.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-sm text-gray-300">{name}</span>
        <span className="font-mono text-xs text-cyan-400">{level}%</span>
      </div>
      <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-28 px-6 bg-gray-950 relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/30 px-3 py-1 rounded">
            Skills
          </span>
          <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-5 tracking-tight">
            What I Work With
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-3">
            Tools and technologies I use to build things
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              ref={(el) => (cardsRef.current[index] = el)}
              className="border border-gray-800 rounded-lg p-6 bg-gray-900/40 hover:border-cyan-400/20 transition-all duration-300 opacity-0 translate-y-6"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">{group.icon}</span>
                <h3 className="font-mono text-sm font-bold text-white tracking-widest uppercase">
                  {group.category}
                </h3>
              </div>

              {/* Skill Bars */}
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="font-mono text-xs text-gray-600 tracking-wide">
            Skill levels reflect current hands-on experience — always growing.
          </p>
        </div>

      </div>
    </section>
  )
}
