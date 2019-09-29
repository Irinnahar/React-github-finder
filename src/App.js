import React, { Component, Fragment } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert/Alert';
import About from './Components/pages/About';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const axios = require('axios').default;

class App extends Component {
  state = {
    userList: [],
    repos: [],
    user: {},
    loading: false,
    setAlert: null,
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/users?client_id=df05c58246f1c0801fc7
    &client_secret=158b800027ce140f07c616006632a3417c855116`);
    this.setState({ userList: response.data, loading: false })
  }

  searchUser = async name => {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    this.setState({ userList: response.data.items, loading: false });
  }

  getUser = async name => {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/users/${name}?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    this.setState({ user: response.data, loading: false });
  }

  getRepos = async name => {
    this.setState({ loading: true })
    const response = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    this.setState({ repos: response.data, loading: false });
  }

  setAlert = (alert) => {
    this.setState({ setAlert: { icon: alert.icon, type: alert.type, text: alert.text } })
    setTimeout(() => {
      this.setState({ setAlert: null })
    }, 5000)
  }

  clearUser = () => {
    this.setState({ userList: [] });
  }
  render() {
    const { userList, loading, user, repos } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" />
          <div className="container">
            {this.state.setAlert !== null && <Alert alert={this.state.setAlert} />}
            <Switch>
              <Route path="/" exact render={props => (
                <Fragment>
                  <Search
                    searchUser={this.searchUser}
                    clearUser={this.clearUser}
                    showClearBtn={this.state.userList.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users users={userList} loading={loading} />
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
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getRepos={this.getRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />

            </Switch>

          </div>
        </div>
      </Router>

    )
  }
}

export default App;