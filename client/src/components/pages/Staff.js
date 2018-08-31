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
        <h1>Welcome {currentUserName}</h1>
        {/* <p>Email: {currentUserEmail}</p> */}
        {/* <p>Find and save doctors information</p> */}
        
        <Main/>
          <div id = "butn" className='col m4 s12'>
            <span className = " msg  waves-effect waves-light btn orange accent-1 message " ><Link to="/saved"><i className="material-icons left tiny">bookmark_border</i> Your Saved Doctors</Link></span>
          </div>
          <br></br>
          <div id = "butn" className='col m4 s12'>
            <span className = " msg  waves-effect waves-light btn orange accent-1 message " ><Link to="/notes"><i className="material-icons left tiny">bookmark_border</i> Your Saved Notes</Link></span>
          </div>  
        <Search/>
              <div>
              
                <div>
                  <Switch>
                  {/* <Route exact path="/notes" component={Notes} /> */}
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
