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
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Stats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
