import React from "react";
import { Link } from "react-router-dom";
import "./Doctor.css";

const Doctor = props => (

 <div id={props.doctorId} className="card">
    <div className="col s12 l4 m4 card-image waves-effect waves-block waves-light">
      <img id = "drImg" src={props.drImageURL} />
      
    </div>
    <div className="view col s12 l4 m4 ">
                 {/* <span >{props.drSpecialties}</span> */}
                 </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.doctorTitle}<i className="material-icons right">more_vert</i></span>
          
      <div className="card-action">
                {props.saveDoctor ?  <Link to="#" className="btn-unsave waves-effect waves-light btn btn-large pulse   blue lighten-3" onClick={() => props.saveDoctor(props.doctorTitle, props.drSpecialties, props.drPracticeAddresss1, props.drPracticeAddresss2, props.drPracticeAddresss3, props.drPracticeAddresss4, props.drPracticeAddresss5, props.drPhone, props.drImageURL)}> <i className="material-icons tiny">bookmark</i> Save Doctor</Link> : null}


                {props.deleteDoctor ?  <Link to="#" className="btn-unsave waves-effect waves-light btn btn-large pulse   blue lighten-3" onClick={() => props.deleteDoctor(props.doctorId)}> Delete Doctor</Link> : null}
            </div>
     
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Doctor Contact Information<i className="material-icons right">close</i></span>
    
        <div className="row">
                 <div className="view col s12 m12 l6">
                 <span >{props.drSpecialties} </span>
                 </div>
                 </div>
                 <div className="row">
                 <div className="view col s12 m12 l6">
                 <span >{props.drPracticeAddresss1} , {props.drPracticeAddresss2} , {props.drPracticeAddresss3} , {props.drPracticeAddresss4} , {props.drPracticeAddresss5} </span><br></br>
                 <span >{props.drPhone.slice(0,3)}-{props.drPhone.slice(3,6)}-{props.drPhone.slice(6,10)}</span>
                 </div>
        </div>
                
    </div>
  </div>

);
export default Doctor;
