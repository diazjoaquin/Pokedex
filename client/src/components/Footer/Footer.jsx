import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-cont">
            <div className="text-container"><p>© Díaz Joaquín - All right reserver - 2022</p></div>
            <div className="icons-container">
                <a className="icon" href='https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-b004b31a7/'><AiFillLinkedin/></a>
                <a className="icon"href='https://github.com/diazjoaquin'><AiOutlineGithub/></a>
            </div>
        </footer>
        );
}

export default Footer;