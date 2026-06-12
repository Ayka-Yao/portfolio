import CanvasCursor from '../components/CanvasCursor'
import { Navbar } from '../components/Navbar'
import StarBackground from '../components/StarBackground'
import Projects from './Projects'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { useState } from 'react'
import Loader from '../components/Loader'

function App() {
  const [showInitialLoader, setShowInitialLoader] = useState(true)

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {showInitialLoader && (
        <Loader onComplete={() => setShowInitialLoader(false)} />
      )}

      <StarBackground />
      <CanvasCursor />
      <Navbar onNavigate={handleNavigate} />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App