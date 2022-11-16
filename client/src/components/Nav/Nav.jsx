import React from "react";
import { Link } from 'react-router-dom';
import Searchbar from '../Search/Searchbar.jsx';
import './Nav.css';


export default function Nav () {



    return (
        <nav className="navbar">
            <Link to={'/home'}>
                <div className="logo-container"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9038defb-5494-46f2-a66d-e84678fbfa33/d83jgkl-7486af7c-2689-4de5-845e-c9515c0ddbe0.png/v1/fill/w_800,h_310,strp/pokemon_png_pack_by_kaylor2013_d83jgkl-fullview.png" alt="logo"/>
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