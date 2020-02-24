import React from 'react';



const ProjectShowcase = ({ name, projectPic, description, source, live }) => {
    return (
        <div id="projects" className="projectcontainer">
            <h1 className="projectcontainer__name">{name}</h1>
            <img className="projectcontainer__image" alt='project' src={projectPic} />
            <div className="projectcontainer__description">
                <p>
                    {description}
                </p>
                <a href={source} className="projectcontainer__button">Source Code</a>
                <a href={live} className="projectcontainer__button">View Live</a>
            </div>
        </div>
    );
}

export default ProjectShowcase;

ProjectShowcase.defaultProps = {
    name: "Cool project",
    projectPic: 'https://4.bp.blogspot.com/-WL7pR1_DSfE/W0hzY0Sk9rI/AAAAAAAAASQ/doY8xUE3FYkgpWuMzdhv9aARj7qiAsiVwCPcBGAYYCw/s1600/Basset-Hound-pup.jpg',
    description: 'Sick project, bro!',
    source: "www.google.com",
    live: "www.google.com"
}