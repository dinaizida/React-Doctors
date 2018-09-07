import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import Saved from "./components/Saved";

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';


import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';

import './App.css';

function onAuthRequired({ history }) {
    history.push('/login');
  }

class App extends Component {
    render() {
        return (
            <Router>
                <Security
                    issuer="https://dev-182542.oktapreview.com/oauth2/default"
                    client_id="0oag356yn7yLacZv00h7"
                    redirect_uri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={onAuthRequired}
                > 
                    
                        <div className="App">
                            <Navbar />
                            <div className="container">
                            <Route path="/" exact={true} component={Home} />
                            <SecureRoute path="/staff" exact={true} component={Staff} />
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                           
                            <Route
                                path="/login"
                                render={() => (
                                <Login baseUrl="https://dev-182542.oktapreview.com/" />
                                )}
                            />
                            <Route path="/implicit/callback" component={ImplicitCallback} />
                            </div>
                        </div>

 
                </Security>
            </Router>
        );
    }
}

export default App;