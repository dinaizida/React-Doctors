import React from "react";
import "./Card.css";

const Card = props => (
    <div className = "card">
        <div id="cardContent" className="card-content card hoverable ">
            <span id = "drTitle" className="card-title cardTitle">{props.cardTitle}</span>
            {props.cardContent}
            
        </div>
    </div>
)

export default Card;