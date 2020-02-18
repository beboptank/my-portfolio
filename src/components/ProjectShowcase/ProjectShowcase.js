import React from 'react';

const ProjectShowcase = ({ num, projectPic, description }) => {
    return (
        <div id="projects">
            <h1>Project {num}</h1>
            <img alt='project' src={projectPic} width='450px' height='auto'/>
            <p>
                {description}
            </p>
            <button>Source Code</button>
            <button>View Live</button>
        </div>
    );
}

export default ProjectShowcase;

ProjectShowcase.defaultProps = {
    num: 1000,
    projectPic: 'https://4.bp.blogspot.com/-WL7pR1_DSfE/W0hzY0Sk9rI/AAAAAAAAASQ/doY8xUE3FYkgpWuMzdhv9aARj7qiAsiVwCPcBGAYYCw/s1600/Basset-Hound-pup.jpg',
    description: 'Sick project, bro!'
}