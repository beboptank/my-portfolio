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
          name="Smart Brain"
          description="A full stack project using Clarifai's face recognition 
          API. Culmination of my learning in Andrei Neagoie's Zero to Mastery 
          course. Used React, Node JS, Express, PostgresSQL, and Heroku."
          source="https://github.com/beboptank/smart-brain-app"
          live="https://smart-brain-sc.herokuapp.com/"
          firstProject
        />
        <ProjectShowcase 
          name="Reddit Clone"
          description="An international, open-source team project focused on 
          recreating the website Reddit. Assisted in developing React components 
          for the front end. Used Next.js, React, and SCSS."
          source="https://github.com/chingu-voyages/v13-bears-team-04"
        live="https://redditclone-v13.now.sh/"
        />
        <ProjectShowcase 
          name="SAFE Gardening UI/UX"
          description="An international, open-source team project focused on 
          remaking the UI and UX of the website for SAFE Gardening, a non-profit organization. 
          Used HTML, SCSS, and vanilla JavaScript."
        source="https://github.com/chingu-voyage4/Geckos-Team-15"
        live="https://chingu-voyage4.github.io/Geckos-Team-15/"
        />
        <ProjectShowcase 
          name="Woody"
          description="Developing and deploying a new website for Woody, a bar in
          Fukui, Japan. Collaborating with the owner to create a website that
          reflects the style of his bar. Using React and SCSS."
          source="https://github.com/beboptank/woody-website"
          live="http://woody.surge.sh/"
        />
        <Contact />
        <Footer />
      
    </div>
  );
}

export default App;
