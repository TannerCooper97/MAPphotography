import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
    <Router>
     <NavBar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/gallery" element={<Portfolio/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
