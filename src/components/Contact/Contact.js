import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import '../../sass/components/_contact.scss';

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
                        positions in the North and South Carolina, Georgia, and
                        northern Florida areas. 
                    </p>
                    <a 
                        className="contactcontainer__button"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:sethchristmus@gmail.com"
                    >Contact Me</a>
                </div>
                <div className="contactcontainer__socialmedia">
                    <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/SethChristmus"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faTwitterSquare} /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/beboptank"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faGithubSquare} /></a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/schristmus/"><FontAwesomeIcon className="contactcontainer__socialmedia__icon" icon={faLinkedin} /></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;