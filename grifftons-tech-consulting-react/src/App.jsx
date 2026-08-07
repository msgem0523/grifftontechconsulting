import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import BusinessWebsites from './pages/BusinessWebsites';
import LandingPages from './pages/LandingPages';
import QrPages from './pages/QrPages';
import TechSupport from './pages/TechSupport';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Questionnaire from './pages/Questionnaire';
import TeMechaResume from './pages/resume/TeMechaResume';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-websites" element={<BusinessWebsites />} />
          <Route path="/landing-pages" element={<LandingPages />} />
          <Route path="/qr-pages" element={<QrPages />} />
          <Route path="/tech-support" element={<TechSupport />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume/temecha" element={<TeMechaResume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
