import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import React from 'react';
import "../style/nav.css"
function Navbar(){
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>My work</a>
                <a href='/#'>Blog</a>
                <a href='/#'>About Me</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
                <button className='nav-btn' onClick={showNavbar}>
                    <FaBars/>
                </button>
            </nav>
        </header>
    )
}

export default Navbar;