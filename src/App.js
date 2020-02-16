import React from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';

function App() {
  return (
    <div className="App">
      
        <Hero />
        <About />
        <ProjectShowcase />
        <ProjectShowcase />
        <ProjectShowcase />
        {/*<Contact />
        <SocialMedia />
      */}
    </div>
  );
}

export default App;
