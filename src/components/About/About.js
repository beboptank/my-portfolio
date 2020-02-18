import React from 'react';

import './About.scss';

const About = () => {
    return (
        <div id="about" className="aboutcontainer">
            <h1 className="aboutcontainer__head">About Me</h1>
            <p className="aboutcontainer__content">
                I'm a self-taught developer from South Carolina. I've spent the 
                past three years learning to code and now I'm looking for my 
                first opportunity.
            </p>
            <a href="#projects" className="aboutcontainer__linkbutton">My Projects</a>
        </div>
    );
}

export default About;