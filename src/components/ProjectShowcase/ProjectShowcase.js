import React from 'react';

import '../../sass/components/_projectshowcase.scss';

const ProjectShowcase = ({ name, description, source, live, firstProject }) => {

    if (firstProject) {
        return (
            <div id="projects" className="projectcontainer" data-aos="flip-left" data-aos-duration="1500">
                <h1 className="projectcontainer__header">Projects</h1>
                <h2 className="projectcontainer__name">{name}</h2>
                <div className="projectcontainer__buttons">
                    <a rel="noopener noreferrer" target="_blank" href={source} className="projectcontainer__buttons__linkbutton">Source Code</a>
                    <a rel="noopener noreferrer" target="_blank" href={live} className="projectcontainer__buttons__linkbutton">View Live</a>
                </div>
                <div className="projectcontainer__description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        )
    } else {
        return (

            <div id="projects" className="projectcontainer" data-aos="flip-left" data-aos-duration="1500">
                <h2 className="projectcontainer__name">{name}</h2>
                <div className="projectcontainer__buttons">
                    <a rel="noopener noreferrer" target="_blank" href={source} className="projectcontainer__buttons__linkbutton">Source Code</a>
                    <a rel="noopener noreferrer" target="_blank" href={live} className="projectcontainer__buttons__linkbutton">View Live</a>
                </div>
                <div className="projectcontainer__description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        );
    }    
}

export default ProjectShowcase;

ProjectShowcase.defaultProps = {
    name: "Cool project",
    description: 'Sick project, bro!',
    source: "www.google.com",
    live: "www.google.com",
    firstProject: false
}