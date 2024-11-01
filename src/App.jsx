import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./reusable-components/home-components/hero";
import About from "./reusable-components/home-components/about";
import Projects from "./reusable-components/home-components/projects";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
