import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <AboutMe />
        <About />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
