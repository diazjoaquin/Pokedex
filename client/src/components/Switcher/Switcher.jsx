import React from "react";
import './Switcher.css';
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const Switcher = () => {

    const handleChangeTheme = (event) => {
        event.preventDefault();
        document.body.classList.toggle('darker');
        document.querySelector('.switch').classList.toggle('actived');
    }
    
    return (
        <button className="switch" onClick={handleChangeTheme}>
                <span className="switch-icon"><IoIosSunny/></span>
                <span className="switch-icon"><IoIosMoon/></span>
        </button>
    )
}

export default Switcher;