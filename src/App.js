import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsVisualArts from "./pages/ProjectsVisualArts";
import AboutMe from "./pages/AboutMeVisualArts";
import "./App.css";

function App() {
    return (
        <Router>
            {" "}
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
            </Routes>
        </Router>
    );
}

export default App;
