import React from 'react';
import {Animated} from 'react-animated-css';



const Hero = () => {
    return (
        <div id="hero" className="herocontainer">
            <Animated animationIn="bounceInLeft" animationInDuration="1500">
                <h1 className="herocontainer__head">Hello. My name is Seth Christmus.</h1>
                <h2 className="herocontainer__subhead">I'm a front end developer.</h2>
                <a href="#about" className="herocontainer__linkbutton">Learn More</a>
            </Animated>
        </div>
    );
}

export default Hero;