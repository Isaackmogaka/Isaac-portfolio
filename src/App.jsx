import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import History from './components/History'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-950 text-white white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App