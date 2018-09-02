import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "../Main";
import "./Staff.css";

import Search from "../Search";
import Saved from "../Saved";

import Notes from "../../pages/Notes";
import Detail from "../../pages/Detail";
import NoMatch from "../../pages/NoMatch";

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      
      <Router>
      <div>
        <br></br>
        <br></br>
        <h2>Welcome {currentUserName}</h2>
        {/* <p>Email: {currentUserEmail}</p> */}
        {/* <p>Find and save doctors information</p> */}
        <div className = "row">
            <div id = "butn" className='col m6 s12'>
              <span id ="drnt" className = "  btn-large hoverable  waves-effect waves-light btn blue lighten-3   " ><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Your Saved Doctors</Link></span>
            </div>
           
            <div id = "butn" className='col m6 s12'>
              <span id ="drnt" className = " btn-large     hoverable waves-effect waves-light btn  blue lighten-3  " ><Link to="/notes"><i className="material-icons left tiny">bookmark_border</i> Your Saved Notes</Link></span>
            </div>
          </div>  
        
        <Main/>
       
        <Search/>
              <div>
              
                <div>
                  <Switch>
                  
                  <Route exact path="/Saved" component={Saved} />
              
                      <Route exact path="/notes" component={Notes} />
                      <Route exact path="/notes/:id" component={Detail} />
                      
                  </Switch>
                </div>
               
             </div>   
      </div>
      
      </Router>
     
    );
  }
}

export default Staff;
