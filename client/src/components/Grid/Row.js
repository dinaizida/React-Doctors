import React from "react";

export const Row = ({ fluid, children }) => (
  // <div className={`row${fluid ? "-fluid" : ""}`}>
  <div className=" card-content card hoverable orange lighten-4">
    {children}
  </div>
);
