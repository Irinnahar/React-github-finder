import React, { useState, Fragment } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert/Alert';
import About from './Components/pages/About';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GithubState from './Components/Context/Github/GithubState';
import AlertState from './Components/Context/Alert/AlertState';

const axios = require('axios').default;

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" />
            <div className="container">
              <Alert />
              <Switch>
                <Route path="/" exact render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
                />
                <Route
                  path='/about'
                  exact
                  component={About}
                />
                <Route
                  path='/user/:login'
                  exact
                  component={User}
                />

              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;