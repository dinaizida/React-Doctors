import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Detail.css";
import Notes from "../../pages/Notes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Detail extends Component {
  state = {
    note: {}
  };
  // When this component mounts, grab the note with the _id of this.props.match.params.id
  
  componentDidMount() {
    API.getNote(this.props.match.params.id)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div class = "" >
      <br></br>
      <br></br>
      
        <Row>
          <Col size="m6 l6 s12">
            <Jumbotron>
              <h4>
                {this.state.note.title} for  {this.state.note.specialties}
              </h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="m10 s12 ">
           
              <div class = "card">
                <p class = "noteInfo" >
                  {this.state.note.mynote}
                </p>
              </div>
          
          </Col>
        </Row>
        <Row>
        <br></br>
          <Col size="m2">

            <span class = "btn-unsave waves-effect waves-light btn btn-large pulse   blue lighten-3"><Link to="/notes"> Back to My Notes List</Link></span>
          </Col>
        </Row>
        <div>
                      <Route exact path="/notes" component={Notes} />
                    
                </div>
                <br></br>
                
      
      </div>
    );
  }
}

export default Detail;
