import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <div className="navbar-fixed">
        {/* <nav className="site-navbar ">
            <div className="nav-wrapper row  center-align flow-text navbar-fixed-top"> */}
                {/* <div className='col m4 s12' >
                    <Link to="/" className=" brand-logo"><img src="/images/logo1.png" alt="doctor" className="logo-image" /></Link>
                </div>    */}
            
                    {/* <div id = "butn" className='col m4 s12'>
                    <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Saved Doctors</Link></span>
                    </div>    */}

        {/* <nav className="navbar navbar-expand-sm  mb-4">
        <div className="container">
                 <div className="container">
          <Link className="navbar-brand" to="/">
            Doctors App Portal
          </Link> */}
          <nav className="site-navbar ">
            <div className="nav-wrapper row  center-align flow-text navbar-fixed-top">
                <div className='col m4 s12' >
                        <Link to="/" className=" brand-logo"><img src="/images/logo1.png" alt="doctor" className="logo-image" /></Link>
                </div> 
                
                {/* <div id = "butn" className='col m4 s12'>
                    <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Saved Doctors</Link></span>
                    </div>  */}
                    {/* <div id = "butn" className='col m4 s12'>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    </div> */}
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"> */}
              <div id = "butn" className='col m3 s12'>
                <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link  to="/">
                  Home
                </Link></span>
                </div>
              {/* </li>
              <li className="nav-item"> */}
              <div id = "butn" className='col m3 s12'>
              <span className = " menuBtn waves-effect waves-light btn-small buttonColor " ><Link  to="/staff">
                  User Portal
                 </Link></span>
                 </div>
              {/*</li>
            </ul> */}
          {/* </div>
        </div> */}


            {/* /*****************************          */}
          </div> 
        </nav>
        
    </div>


)

export default Navbar;