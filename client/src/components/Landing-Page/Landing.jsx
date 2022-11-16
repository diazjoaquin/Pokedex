import React from "react";
import './Landing.css';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';


export default function Landing () {

    return (
        <section className="landing">
            <div className="center-on-page">
                <div className="pokeball">
                    <Link exact to="/home">
                    <div className="pokeball__button"></div>
                    </Link>
                </div>
            </div>
            <div className="icons-container">
                <a className="icon" href='https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-b004b31a7/'><AiFillLinkedin/></a>
                <a className="icon"href='https://github.com/diazjoaquin'><AiOutlineGithub/></a>
            </div>
        </section>
    )
}