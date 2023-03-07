import React from 'react'
import { useEffect,useState } from 'react'
import './Nav.css'
import { Route } from "react-router-dom";
import App from './App'
function Nav() {

    // this code makes the navbar dark on scroll and keeps it transparent on the topmost banner image
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100) {
                 handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="Netflix Logo"
                onClick={() => <Route path="App" element={<App />} />}
            />
            <img
                className='nav_avatar'
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix avatar"
            />
        </div>
    )
}

export default Nav
