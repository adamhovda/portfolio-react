import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
 library.add(fab)

function Footer () {
    return (
        <footer className='footerSection'>
            <a href='https://github.com/adamhovda' target="_blank">
            <i><FontAwesomeIcon icon={faGithub} className="fa-5x footerIcons" /></i>
            </a>
            <a href='https://www.linkedin.com/in/adam-hovda-b67667266/' target="_blank">
            <i><FontAwesomeIcon icon={faLinkedin}  className="fa-5x footerIcons"/></i>
            </a>
            <a href='https://twitter.com/adamhovda' target="_blank">
            <i><FontAwesomeIcon icon={faTwitter}  className="fa-5x footerIcons"/></i>
            </a>
        </footer>
    )    
}

export default Footer;