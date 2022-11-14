import React from "react";
import './Landing.css';
import { Link } from 'react-router-dom';


export default function Landing () {

    return (
        <div className="center-on-page">
            <div className="pokeball">
                <Link exact to="/home">
                <div className="pokeball__button"></div>
                </Link>
            </div>
        </div>
    )
}