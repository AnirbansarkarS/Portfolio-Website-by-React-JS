import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Stats from "./components/stats";
import Contact from "./components/contacts";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="app-shell text-white">
      <div className="grid-overlay" aria-hidden />
      <div className="floating-blob blob-one" aria-hidden />
      <div className="floating-blob blob-two" aria-hidden />
      <div className="floating-blob blob-three" aria-hidden />

      <Navbar />

      <main className="content-wrapper">
        <Hero />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
