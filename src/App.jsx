import './App.css'
import Hero from './sections/Hero/Hero'
import Skills from './sections/skills/Skills'
import Project from './sections/project/Projext'
import Footer from './sections/Footer'
import ContactMe from './sections/Contactme'
import Navbar from './sections/Navbar'

function App() {
  return (
<div className="space-y-20 pb-20"> 
      <Navbar />
      <section id="hero"><Hero/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Project /></section>
      <section id="contact"><ContactMe /></section>
      <Footer />
    </div>
  )
}

export default App
