import React from "react";

export const TextArea = props => (
  <div style = {{ height: 200, clear: "both", paddingTop: 20, textAlign: "center" }}
  className="form-group ">
    <textarea style = {{ height: 200, clear: "both", fontSize: "1.2em", textAlign: "center" }} className="card" rows="100" {...props} />
  </div>
);
