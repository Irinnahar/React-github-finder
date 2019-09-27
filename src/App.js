import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Search from './Components/Search';
const axios = require('axios').default;

class App extends Component {
  state = {
    userList: [],
    loading: false
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
    this.setState({ userList: response.data, loading: false })
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Search searchUser={this.searchUser} />
          <Users users={this.state.userList} loading={this.state.loading} />
        </div>
      </div>
    )
  }
}

export default App;