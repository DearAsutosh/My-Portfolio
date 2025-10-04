import React from 'react'
import LandingPage from './components/Pages/HomePage/LandingPage'
import SkillsSection from './components/Pages/SkillsPage/SkillsSection'
import ProjectsSection from './components/Pages/ProjectPage/ProjectsSection'
import Contact from './components/Pages/ContactSection/Contact'
import Footer from './components/Pages/Footer/Footer'
import Loader from './components/NeonLoader'
import SmoothCursor from './components/SmoothCursor'
import { motion } from 'motion/react'

const App = () => {
  const [loading, setLoading] = React.useState(true)

  return (
    <>
      {/* Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* App content */}
      <motion.div
        className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
        <SmoothCursor />
        <motion.div className="fixed top-0 h-1 w-full bg-cyan-400 origin-top-left z-50 border border-black"></motion.div>
        <LandingPage />
        <SkillsSection />
        <ProjectsSection />
        <Contact />
        <Footer />
      </motion.div>
    </>
  )
}

export default App
