import "./App.css";
import Hero from "./sections/Hero/Hero";
import Skills from "./sections/skills/Skills";
import Project from "./sections/project/Project";
import Footer from "./sections/Footer";
import ContactMe from "./sections/Contactme";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="space-y-20 pb-20">
      <Navbar />
      <section id="hero" className="scroll-mt-28">
        <Hero />
      </section>

      <section id="skills" className="scroll-mt-28">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-28">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-28">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}

export default App;
