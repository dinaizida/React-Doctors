import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div style = {{ height: 200, clear: "both", paddingTop: 20, textAlign: "center" }} className="list-overflow-container card">
      <br></br>
      <ul style = {{ height: 100, clear: "both", paddingTop: 20, textAlign: "center" }} className="list-group">
        {children}
      </ul>
      <br></br>
    </div>
  );
};
