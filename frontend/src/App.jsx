import Navbar from "./components/Navbar.jsx";
import Home from "./containers/Home.jsx";
import About from "./containers/About.jsx";
import Experience from "./containers/Experience.jsx";
import Projects from "./containers/Projects.jsx";
import Contact from "./containers/Contact.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
