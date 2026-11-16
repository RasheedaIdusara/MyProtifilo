import NavBar from "./layouts/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";

function App() {
  return (
   <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
