import React from 'react';



const Footer = () => {
    return (
        <div className="footercontainer">
            <p>
                &copy; 2020{new Date().getFullYear() > 2020 && document.write("-" + new Date().getFullYear())}, Seth Christmus. Made with ❤️, ☕, and create-react-app
            </p>
            
        </div>
    );
}

export default Footer;