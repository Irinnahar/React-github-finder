import React, { useState, Fragment } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/Users/Users';
import User from './Components/Users/User';
import Search from './Components/Users/Search';
import Alert from './Components/layout/Alert/Alert';
import About from './Components/pages/About';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const axios = require('axios').default;

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // async componentDidMount() {
  //   setState({ loading: true })
  //   const response = await axios.get(`https://api.github.com/users?client_id=df05c58246f1c0801fc7
  //   &client_secret=158b800027ce140f07c616006632a3417c855116`);
  //   setState({ userList: response.data, loading: false })
  // }

  const searchUser = async name => {
    setLoading(true);
    const response = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    setUsers(response.data.items);
    setLoading(false);
  }

  const getUser = async name => {
    setLoading(true);
    const response = await axios.get(`https://api.github.com/users/${name}?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    setUser(response.data);
    setLoading(false);
  }

  const getRepos = async name => {
    setLoading(true);
    const response = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    setRepos(response.data);
    setLoading(false);
  }

  const showAlert = (alert) => {
    setAlert({ icon: alert.icon, type: alert.type, text: alert.text });
    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  }
  return (
    <Router>
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          {alert !== null && <Alert alert={alert} />}
          <Switch>
            <Route path="/" exact render={props => (
              <Fragment>
                <Search
                  searchUser={searchUser}
                  clearUser={clearUser}
                  showClearBtn={users.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <Users users={users} loading={loading} />
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
                  getUser={getUser}
                  getRepos={getRepos}
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


export default App;