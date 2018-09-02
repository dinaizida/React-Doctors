import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 10, textAlign: "center" }}
    className=""
  >
    {children}
  </div>
);

export default Jumbotron;
