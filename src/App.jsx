import NavBar from "./layouts/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <main>
        <About />
        <Contact/>
      </main>
    </div>
  )
}

export default App
