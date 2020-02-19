import React from 'react';

import './Contact.scss';

const Contact = () => {
    return (
        <section>
            <div className="contactcontainer">
                <h1 className="contactcontainer__head">
                    Contact
                </h1>
                <div className="contactcontainer__content">
                    <p>
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
            </div>
        </section>
    );
}

export default Contact;