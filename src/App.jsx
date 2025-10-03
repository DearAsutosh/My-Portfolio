import React from 'react'
import LandingPage from './components/Pages/HomePage/LandingPage'
import SkillsSection from './components/Pages/SkillsPage/SkillsSection'
import { motion, useScroll } from 'motion/react'
import SmoothCursor from './components/SmoothCursor'
import ProjectsSection from './components/Pages/ProjectPage/ProjectsSection'
// import Lenis from 'lenis'
import Contact from './components/Pages/ContactSection/Contact'
import Footer from './components/Pages/Footer/Footer'
const App = () => {
  const scrollYProgress = useScroll().scrollYProgress



  // requestAnimationFrame(raf);
  return (
    <>
      <SmoothCursor />
      <motion.div className="fixed top-0 h-1 w-full bg-cyan-400 origin-top-left z-50 border border-black" style={{ scaleX: scrollYProgress }}></motion.div>
      <LandingPage />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer/>
    </>
  )
}

export default App