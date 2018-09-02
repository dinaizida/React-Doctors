import React from "react";
import "./DeleteBtn.css";


const DeleteBtn = props => (
  <span className="btn-unsave waves-effect waves-light btn btn-large pulse   blue lighten-3" {...props}  > 
    delete note
  </span>
);

export default DeleteBtn;
