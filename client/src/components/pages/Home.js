import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import "./Home.css";

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            {/* You have entered the user portal,{' '} */}
            <span id = 'infoTitle' className="waves-effect waves-light btn btn-large pulse blue lighten-4"><Link to="/staff">Click on User Portal to veiw your Doctors</Link></span>
          </p>
          <br></br>
        <br></br>
        <br></br>
          <button className="btn btn-light btn-lg waves-effect waves-light btn btn-large pulse  red lighten-3" onClick={this.logout}>
            Logout
          </button>
          <br></br>
        <br></br>
        <br></br>
        </div>
      ) : (
        <div>
           <br></br>
        <br></br>
        <br></br>
          {/* <p className="lead waves-effect waves-light btn btn-large  orange accent-1">
            Please enter your email and password to access User Portal
          </p> */}
          <br></br>
        <br></br>
        <br></br>
          <button className="btn btn-dark btn-lg btn btn-light btn-lg waves-effect waves-light btn btn-large pulse  red lighten-3" onClick={this.login}>
            Login
          </button>
          <br></br>
        <br></br>
        <br></br>
        </div>
      );

      return (
        <div  className="jumbotron">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          {/* <h1 id ="mainTitle" className="display-4">My Doctors App</h1> */}
          <h1 id ="mainTitle" className="display-4"></h1>

          <br></br>
        <br></br>
        <br></br>
        <div>
        <br></br>
        <br></br>
        <br></br>
        </div>
          {mainContent}
          <br></br>
        <br></br>
        <br></br>
        </div>
      );
    }
  }
);
