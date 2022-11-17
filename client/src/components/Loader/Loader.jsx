import React from "react";
import './Loader.css';
import loader from '../../assets/4OKl.gif';


const Loader = () => {
    
    return (
        <div className="loader-cont">
            <div className="loader">
            <img src={loader} alt="loading..."/>
            </div>
        </div>
        )
};

export default Loader;