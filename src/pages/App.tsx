import CanvasCursor from '../components/CanvasCursor'
import { Navbar } from '../components/Navbar'
import StarBackground from '../components/StarBackground'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Projects from './Projects'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { useState } from 'react'
import Loader from '../components/Loader'
import PageLoader from '../components/PageLoader'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

    </Routes>
  )
}
function App() {
  const [showInitialLoader, setShowInitialLoader] = useState(true)
  const [pageLoaderText, setPageLoadertText] = useState<string | null>(null)

  const navigate = useNavigate()
  const handleNavigate = (path: string, label: string) => {
    setPageLoadertText(label)
    setTimeout(() => {
      navigate(path)
    }, 800)
  }

  return (
    <>
      {showInitialLoader && (
        <Loader onComplete={() => setShowInitialLoader(false)} />
      )}
      {pageLoaderText && (
        <PageLoader
          text={pageLoaderText}
          onComplete={() => setPageLoadertText(null)} />
      )}

      <StarBackground />
      <CanvasCursor />
      <Navbar onNavigate={handleNavigate} />
      <AppRoutes />

    </>
  )
}

export default App
