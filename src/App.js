import logo from "./logo.svg";
import "./App.css";
import Navbarex from "./components/section/Navbar-ex";
import Presentation from "./components/section/Presentation";
import Skills from './components/section/Skills';
import Projects from "./components/section/Projects";

function App() {
  return (
    <div className="App">
      <Navbarex />
      <Presentation/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
