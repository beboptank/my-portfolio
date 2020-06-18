import React from 'react';

import Tech from '../Tech/Tech';

import '../../sass/components/_about.scss';
import 'aos/dist/aos.css';

const About = () => {

    return (
        <div id="about" className="aboutcontainer specialsubsectionlayout" data-aos="zoom-in" data-aos-duration="1500">
            <div className="aboutcontainer__imagecontainer">
                <img className="aboutcontainer__imagecontainer__image" alt="headshot" src="https://cdn.statically.io/gh/beboptank/my-portfolio/45be0ac4/src/components/About/headshot.jpg"/>
            </div>
            <div className="aboutcontainer__contentcontainer">
                <h1 className="aboutcontainer__contentcontainer__head">About Me</h1>
                <p className="aboutcontainer__contentcontainer__info">
                    I'm a front end developer from South Carolina. I've spent the 
                    past three years learning about front end development and have 
                    worked on multiple open source team projects. Now I'm looking for my 
                    first professional opportunity.
                </p>
                <a href="#projects" className="aboutcontainer__contentcontainer__linkbutton">My Projects</a>
                <Tech />
            </div>
        </div>
    );
}

export default About;