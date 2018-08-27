import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div className="navbar-fixed">
        <nav className="site-navbar">
            <div className="nav-wrapper row  center-align flow-text navbar-fixed-top">
            <div className='col m4' >
                <Link to="/" className=" brand-logo"><img src="/images/logo1.png" alt="doctor" className="logo-image" /></Link>
            </div>   
            
            <div className='col m4 s5'>
                    <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Saved Doctors</Link></span>
                    </div>   
            </div>
        </nav>
        
    </div>


)

export default Navbar;