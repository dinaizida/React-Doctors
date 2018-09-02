import React from "react";

export const Input = props => (
  <div style={{ height: 80, clear: "both", paddingTop: 10, textAlign: "center" }} 
  >
    <input style = {{textAlign: "center", textDecorationColor: "#1567b9"}}  {...props} />
  </div>
);
