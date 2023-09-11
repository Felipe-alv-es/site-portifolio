import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AboutMe />
        <About />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
