import React from 'react';

import './About.scss';

const About = () => {
    return (
        <div id="about" className="aboutcontainer">
            <h1>About Me</h1>
            <p>
                I'm a self-taught developer from South Carolina. I've spent the 
                past three years learning to code and now I'm looking for my 
                first opportunity.
            </p>
            <button>My Projects</button>
        </div>
    );
}

export default About;