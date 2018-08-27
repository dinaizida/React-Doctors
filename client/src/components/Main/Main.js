import React from "react";
import "./Main.css";


const Main = props => (
    <div>
        <div className="site-main">
        <br></br>
        <br></br>
        <h1>FIND A DOCTOR</h1>
        </div>
        
        <div className="container doctor-container" {...props}></div>
    </div>
)
export default Main;