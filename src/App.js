import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
