import React from "react";
import { Link } from "react-router-dom";
import "./Message.css";

const Message = ({ message }) => (
    <div >
             
            <div  className='col m4 s12'>
						<span  className =" msg btn pulse orange accent-1 message">{message}</span>
			</div>
            
        
    </div>


)

export default Message;