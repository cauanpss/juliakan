import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './layout/PageLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';

import './App.css';


function App() {
  return (
    <Router> {/* faz o browser reconhecer a rota como parte do projeto */}
      <Routes> {/* DIV de rotas ("Container")  */}
        <Route path="/" element={<PageLayout />}> {/* Cada rota se comporta como um caminho do projeto e reonhece como página (index é "/" )  */}
          <Route index element={<Home />} /> {/* Cada rota se comporta como um caminho do projeto e reonhece como página (index é "/" )  */}
          < Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;