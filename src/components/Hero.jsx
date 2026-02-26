export default function Hero() {
  const handleClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950 px-6">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Available for hire</span>
        </div>

        <h1 className="font-mono text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Hi, I'm <span className="text-cyan-400">Isaac</span>
        </h1>

        <h2 className="font-mono text-xl md:text-2xl text-gray-400 mb-6 tracking-wide">
          Backend Developer
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-mono">
          I build clean, structured backend systems — APIs, databases, and server logic that powers real applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => handleClick(e, '#projects')}
            className="w-full sm:w-auto px-8 py-3 bg-cyan-400 text-gray-950 font-mono font-bold rounded hover:bg-cyan-300 transition-all duration-200 tracking-wide text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="w-full sm:w-auto px-8 py-3 border border-gray-700 text-gray-400 font-mono rounded hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200 tracking-wide text-sm"
          >
            Get In Touch
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>

      </div>
    </section>
  )
}
