import { useState, useEffect, useRef } from 'react'

// -------------------------------------------------------
// HARDCODED POSTS — we will replace this with a real
// API call from the Node.js backend in Phase 2
// -------------------------------------------------------
const MOCK_POSTS = [
  {
    id: 1,
    title: 'How Laravel Routing Actually Works',
    excerpt:
      'A deep dive into how Laravel matches incoming HTTP requests to the right controller method — and what happens under the hood.',
    date: '2025-03-10',
    readTime: '4 min read',
    tags: ['Laravel', 'PHP', 'Routing'],
  },
  {
    id: 2,
    title: 'Building a REST API From Scratch',
    excerpt:
      'Step by step walkthrough of designing clean API endpoints, handling validation, and returning consistent JSON responses.',
    date: '2025-06-22',
    readTime: '6 min read',
    tags: ['REST API', 'Laravel', 'Backend'],
  },
  {
    id: 3,
    title: 'Understanding Database Relationships',
    excerpt:
      'One-to-many, many-to-many, has-many-through — breaking down Eloquent relationships with real examples from my projects.',
    date: '2025-09-05',
    readTime: '5 min read',
    tags: ['MySQL', 'Eloquent', 'Database'],
  },
  {
    id: 4,
    title: 'My Money Tracker API — How I Built It',
    excerpt:
      'A walkthrough of the wallet system I built — how I handled balance calculations, transaction history, and edge cases.',
    date: '2026-01-18',
    readTime: '7 min read',
    tags: ['Laravel', 'API Design', 'Project'],
  },
]

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function BlogCard({ post, index }) {
  const cardRef = useRef(null)

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

    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="opacity-0 translate-y-6 transition-all duration-700 border border-gray-800 rounded-lg p-6 bg-gray-900/40 hover:border-cyan-400/30 hover:-translate-y-1 group cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top row — date + read time */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-xs text-gray-600">
          {formatDate(post.date)}
        </span>
        <span className="font-mono text-xs text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded">
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-mono text-base font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors duration-200">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="font-mono text-sm text-gray-500 leading-relaxed mb-5">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read more */}
      <div className="flex items-center gap-2 text-xs font-mono text-gray-600 group-hover:text-cyan-400 transition-colors duration-200">
        <span>Read post</span>
        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState(MOCK_POSTS)

  // ----------------------------------------------------------
  // TODO (Phase 2): Replace the line above with a real fetch:
  //
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/posts')
  //     .then(res => res.json())
  //     .then(data => setPosts(data))
  //     .catch(err => console.error('Failed to fetch posts:', err))
  // }, [])
  // ----------------------------------------------------------

  return (
    <section id="blog" className="py-28 px-6 bg-gray-900 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase border border-cyan-400/30 px-3 py-1 rounded">
              Blog
            </span>
            <h2 className="font-mono text-4xl md:text-5xl font-bold text-white mt-5 tracking-tight">
              My Writing
            </h2>
            <p className="text-gray-500 font-mono text-sm mt-3">
              Things I've learned, built, and documented
            </p>
          </div>

          {/* Post count badge */}
          <div className="flex items-center gap-2 border border-gray-800 rounded px-4 py-2 bg-gray-950/40 self-start md:self-auto">
            <span className="font-mono text-2xl font-bold text-cyan-400">{posts.length}</span>
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Posts</span>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 text-center border border-gray-800 rounded-lg p-6 bg-gray-950/40">
          <p className="font-mono text-xs text-gray-600 tracking-wide">
            More posts coming as I keep building and learning —{' '}
            <span className="text-cyan-400">backend connected in Phase 2</span>
          </p>
        </div>

      </div>
    </section>
  )
}
