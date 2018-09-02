import React from "react";

export const Container = ({ fluid, children }) => (
  // <div className={`container${fluid ? "-fluid" : ""}`}>
  <div className="card">
    {children}
  </div>
);
