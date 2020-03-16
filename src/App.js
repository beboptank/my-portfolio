import React from 'react';

import Hero from './components/Hero/Hero';
import About from './components/About/About';
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.scss';
import './sass/main.scss';

function App() {
  return (
    <div className="App layout">
      
        <Hero />
        <About />
        <ProjectShowcase 
          name="Reddit Clone"
          description="An international, open-source team project focused on 
          recreating the website Reddit. Assisted in developing React components 
          for the front end. Used Next.js, React, and SCSS."
          source="https://github.com/chingu-voyages/v13-bears-team-04"
          live="https://coolredditclone.now.sh/"
        />
        <ProjectShowcase 
          name="Woody"
          description="Developed and deployed a new website for Woody, a bar in
          Fukui, Japan. Collaborated with the owner to create a website that
          reflects the style of his bar. Used Gatsby, React, and SCSS."
          source="https://github.com/beboptank/woody-website"
          live="http://woody.surge.sh/"
        />
        <ProjectShowcase 
          name="SAFE Gardening"
          description="An international, open-source team project focused on redesigning 
          the website of SAFE Gardening, a nonprofit. Used HTML, CSS, and JavaScript
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
