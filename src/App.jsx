import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./reusable-components/home-components/hero";
import About from "./reusable-components/home-components/about";
import Projects from "./reusable-components/home-components/projects";
import { useAuthContext } from "./context/auth-context";

function App() {
  const { userData } = useAuthContext();

  console.log("user from context api => ", userData);

  return (
    <div>
      {userData && (
        <div>
          <h1>Welcome {userData?.name}</h1>
        </div>
      )}

      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
