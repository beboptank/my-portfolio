import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Contact.scss';

const Contact = () => {
    return (
        <section>
            <div className="contactcontainer">
                <h1 className="contactcontainer__head">
                    Contact
                </h1>
                <div className="contactcontainer__content">
                    <p className="contactcontainer__content__text">
                        Interested? I'm currently looking for
                        entry level positions in the North and South Carolina
                        areas. 
                    </p>
                    <a 
                        className="contactcontainer__button"
                        target="_blank"
                        href="mailto:sethchristmus@gmail.com"
                    >Contact Me</a>
                </div>
                <div className="contactcontainer__socialmedia">
                    <a href="www.twitter.com/SethChristmus"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faTwitterSquare} /></a>
                    <a href="www.github.com/beboptank"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faGithubSquare} /></a>
                    <a href="https://www.linkedin.com/in/schristmus/"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faLinkedin} /></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;