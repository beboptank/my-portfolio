import React from 'react';

import './ProjectShowcase.scss';

const ProjectShowcase = ({ num, projectPic, description }) => {
    return (
        <div id="projects" className="projectcontainer">
            <h1 className="projectcontainer__name">Project {num}</h1>
            <img className="projectcontainer__image" alt='project' src={projectPic} width='350rem' height='auto'/>
            <div className="projectcontainer__description">
                <p>
                    {description}
                </p>
                <a className="projectcontainer__button">Source Code</a>
                <a className="projectcontainer__button">View Live</a>
            </div>
        </div>
    );
}

export default ProjectShowcase;

ProjectShowcase.defaultProps = {
    num: 1000,
    projectPic: 'https://4.bp.blogspot.com/-WL7pR1_DSfE/W0hzY0Sk9rI/AAAAAAAAASQ/doY8xUE3FYkgpWuMzdhv9aARj7qiAsiVwCPcBGAYYCw/s1600/Basset-Hound-pup.jpg',
    description: 'Sick project, bro!'
}