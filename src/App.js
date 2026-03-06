import LandingPage from "../src/components/LandingPage/landingPage.tsx";
import ProjectPage from "./components/Projects/Pages/ProjectPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/drink-e-desgraca" element={<ProjectPage />} />
          <Route path="/encanto-artesanal" element={<ProjectPage />} />
          <Route path="/felit-courses" element={<ProjectPage />} />
          <Route path="/alma-ds" element={<ProjectPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
