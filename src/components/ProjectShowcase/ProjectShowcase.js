import React from 'react';

import '../../sass/components/_projectshowcase.scss';

const ProjectShowcase = ({ name, description, source, live }) => {
    return (
        <div id="projects" className="projectcontainer">
            <h1 className="projectcontainer__name">{name}</h1>
            <div className="projectcontainer__buttons">
                <a target="_blank" href={source} className="projectcontainer__buttons__linkbutton">Source Code</a>
                <a target="_blank" href={live} className="projectcontainer__buttons__linkbutton">View Live</a>
            </div>
            <div className="projectcontainer__description">
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProjectShowcase;

ProjectShowcase.defaultProps = {
    name: "Cool project",
    description: 'Sick project, bro!',
    source: "www.google.com",
    live: "www.google.com"
}