import React from "react";
import "./Main.css";

const Main = props => (
    <div>
        <div className="site-main">
        <br></br>
        <br></br>
        <h1>Doctors Locator</h1>
        
        </div>
        <div className="container article-container" {...props}></div>
    </div>
)

export default Main;