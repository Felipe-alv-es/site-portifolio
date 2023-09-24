import AboutMe from "./components/AboutMe/AboutMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FictionalMobile from "./components/Projects/Pages/ProjectPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Home />
                <AboutMe />
                <About />
                <Projects />
                <Footer />
              </>
            }
          />
          <Route path="/fictional-mobile" exact element={<FictionalMobile />} />
          <Route path="/fictional-bank" exact element={<FictionalMobile />} />
          <Route path="/cripto-store" exact element={<FictionalMobile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
