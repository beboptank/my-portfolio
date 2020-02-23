import React from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.scss';

import safe from './safe.png';

function App() {
  return (
    <div className="App">
      
        <Hero />
        <About />
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase 
          name="SAFE Gardening"
          projectPic={safe}
          description="An international team project that focused on redesigning 
          the website of SAFE Gardening, a nonprofit. We used HTML, CSS, and JavaScript
          to create a better UI/UX."
          source="https://github.com/chingu-voyage4/Geckos-Team-15"
          live="https://chingu-voyage4.github.io/Geckos-Team-15/"
        />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
