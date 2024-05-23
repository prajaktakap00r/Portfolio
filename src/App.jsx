import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./NavBar";
import Profile from "./ContentBody/Profile";
import Skills from "./ContentBody/Skills";
import Projects from "./ContentBody/Projects";
import Third from "./ContentBody/Third";
import Footer from "./ContentBody/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ResponsiveAppBar />
        <Profile />
        <Skills />
        <Projects />
        <Third />
        <Footer />
      </div>
    </>
  );
}

export default App;
