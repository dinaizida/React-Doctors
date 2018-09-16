import React from "react";

export const Input = props => (
  <div style={{ height: 80, clear: "both", paddingTop: 10, textAlign: "center" }} 
  >
    <input style = {{textAlign: "center", fontSize: "1.2em"}}  {...props} />
  </div>
);
