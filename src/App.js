import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsVisualArts from "./pages/ProjectsVisualArts";
import ProjectsSetDesign from "./pages/ProjectsSetDesign";
import AboutMe from "./pages/AboutMe";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./util/useScrollToTop";

function App() {
    return (
        <Router basename="/juliakan">
            {" "}
            <ScrollToTop />
            {/* faz o browser reconhecer a rota como parte do projeto */}
            <Routes>
                {" "}
                {/* DIV de rotas ("Container")  */}
                {/* Cada rota se comporta como um caminho do projeto e reonhece como página (index é "/" )  */}
                <Route path="/" element={<Home />} />{" "}
                <Route
                    path="/ProjectsVisualArts"
                    element={<ProjectsVisualArts />}
                />
                <Route path="/about" element={<AboutMe />} />
                <Route
                    path="/ProjectsSetDesign"
                    element={<ProjectsSetDesign />}
                />
                <Route
                    path="/projects/:category/:projectid"
                    element={<ProjectPage />}
                />
            </Routes>
        </Router>
    );
}

export default App;
