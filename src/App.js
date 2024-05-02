import AboutMe from "./components/AboutMe/AboutMe";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.tsx";
import ProjectPage from "./components/Projects/Pages/ProjectPage";
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
          <Route path="/twelve-hours" exact element={<ProjectPage />} />
          <Route path="/alma-ds" exact element={<ProjectPage />} />
          <Route path="/fictional-mobile" exact element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
