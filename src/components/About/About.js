import React from 'react';

import './About.scss';

const About = () => {
    return (
        <div id="about" className="aboutcontainer">
            <div className="aboutcontainer__imagecontainer">
                <img className="aboutcontainer__imagecontainer__image" alt="headshot" src={require('./headshot.jpg')}/>
            </div>
            <div className="aboutcontainer__contentcontainer">
                <h1 className="aboutcontainer__contentcontainer__head">About Me</h1>
                <p className="aboutcontainer__contentcontainer__info">
                    I'm a self-taught developer from South Carolina. I've spent the 
                    past three years learning to code and have provided
                    front end code for open source projects. Now I'm looking for my 
                    first professional opportunity.
                </p>
                <a href="#projects" className="aboutcontainer__contentcontainer__linkbutton">My Projects</a>
            </div>
        </div>
    );
}

export default About;