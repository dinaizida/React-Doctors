import React from "react";

export const FormBtn = props => (
  <button {...props}  className=" waves-effect waves-light btn btn-large pulse  red lighten-3 ">
 
    {props.children}
  </button>
);
