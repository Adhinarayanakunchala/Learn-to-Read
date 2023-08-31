import React, { useState } from 'react';
import Logo from "./assets/goworld.png";

const Homepage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
       
        <div className="header">
            <div className="header1">
                <div className="row">
                    <h4>Welcome to GoWest Consultant</h4>
                </div>
                <div className="row">
                    <span>Contact Number: 09876545678</span>
                </div>
            </div>
            <div className="header2">
                <label className="logo">
                    <img src={Logo} alt="GoWest Consultant Logo" />
                </label>
                <div className={menuOpen ? "open" : ""}>
                    <ul className="menu-items">
                        <li><a href="/" className='active'>Home</a></li>
                        <li><a href="Course.html">Courses</a></li>
                        <li><a href="Register.html">Register</a></li>
                        <li><a href="Contact.html">Contact</a></li>
                        <li><a href="About.html">About</a></li>
                    </ul>
                   <button className='menu-icon' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
                   </button>
                </div>
            </div>
        </div>
       
    );

    
};

export default Homepage;
