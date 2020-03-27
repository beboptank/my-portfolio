import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';

import '../../sass/components/_tech.scss';


const Tech = () => {
    return (
        <section>
            <div className="techcontainer">
                <h1>Technologies</h1>
                <ul className="techcontainer__techlist">
                    <li><FontAwesomeIcon icon={faJsSquare}/></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    );
};

export default Tech;