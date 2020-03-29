import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faHtml5, faCss3, faNodeJs, faGit, faGithub, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons';

import '../../sass/components/_tech.scss';


const Tech = () => {
    return (
        <section>
            <div className="techcontainer">
                <h1 className="techcontainer__header">Technologies</h1>
                <ul className="techcontainer__techlist">
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faHtml5} /> HTML</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faCss3} /> CSS</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faSass} /> SASS</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faJsSquare}/> JavaScript</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faReact} /> React</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faNodeJs} /> NodeJS</li>
                    <li className="techcontainer__techlist__item"><FontAwesomeIcon icon={faGit} /> <FontAwesomeIcon icon={faGithub} /> Git and GitHub</li>
                </ul>
            </div>
        </section>
    );
};

export default Tech;