import React from "react";
import { Link } from 'react-router-dom';
import Searchbar from '../Search/Searchbar.jsx';
import './Nav.css';


export default function Nav () {



    return (
        <nav className="navbar">
            <Link to={'/home'}>
                <div className="logo-container"><img src="http://infograficos-estaticos.s3.amazonaws.com/pokemon-de-onde-veio/assets/imagens/pokemon-logo.gif" alt="logo"/>
                </div>
            </Link>
            <div className="searchbar-cont"><Searchbar/></div>
            <div className="create-cont">
            <Link to={'/create'}>
            <button className="create-button">Create</button>
            </Link>
            </div>
        </nav>
        )
}