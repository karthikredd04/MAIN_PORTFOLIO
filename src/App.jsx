import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WelcomeAnimation from './components/WelcomeAnimation'  // Make sure this path is correct!
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    // Optional: Skip animation on return visits
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
    if (hasSeenWelcome === 'true') {
      setShowWelcome(false)
    }
  }, [])

  const handleWelcomeComplete = () => {
    localStorage.setItem('hasSeenWelcome', 'true')
    setShowWelcome(false)
  }

  return (
    <>
      {showWelcome ? (
        <WelcomeAnimation onComplete={handleWelcomeComplete} />
      ) : (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 text-white font-sans">
            <Navbar />
            <main className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  )
}

export default App