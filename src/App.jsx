import Contact from "./components/Contact/Contact"
import Intro from "./components/Intro/Intro"
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar onOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu onOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
