import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faTwitterSquare} />
            <FontAwesomeIcon icon={faGithubSquare} />
        </div>
    );
}

export default SocialMedia;