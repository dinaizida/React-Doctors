import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div className="navbar-fixed">
       
          <nav className="site-navbar ">
            <div className="nav-wrapper row  center-align flow-text navbar-fixed-top">
                <div className='col m4 s12' >
                        <Link to="/" className=" brand-logo"><img src="/images/logo1.png" alt="doctor" className="logo-image" /></Link>
                </div> 
                
                
              <div id = "butn" className='col m3 s6'>
                <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link  to="/">
                  Home
                </Link></span>
                </div>
              
              <div id = "butn" className='col m3 s6'>
              <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link  to="/staff">
                  User Portal
                 </Link></span>
                 </div>
              
          </div> 
        </nav>
        
    </div>


)

export default Navbar;