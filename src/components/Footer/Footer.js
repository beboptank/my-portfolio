import React from 'react';

import '../../sass/components/_footer.scss';

const Footer = () => {
    return (
        <div className="footercontainer">
            <p>
                &copy; 2020{new Date().getFullYear() > 2020 && document.write("-" + new Date().getFullYear())}, Seth Christmus. Made with ❤️, ☕, and React.
            </p>
            
        </div>
    );
}

export default Footer;