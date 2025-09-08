import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sobre" element={<About />} /> */}
        {/* <Route path="/servicos" element={<Services />} /> */}
        {/* <Route path="/contato" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;