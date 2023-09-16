import AboutMe from "./components/AboutMe/AboutMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import FictionalMobile from "./components/Projects/Pages/FictionalMobile";
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
          <Route path="/fm" exact element={<FictionalMobile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
