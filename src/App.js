import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Spinner from './Components/Spinner';
const axios = require('axios').default;

class App extends Component {
  state = {
    userList: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true })
    const response = await axios.get('https://api.github.com/users');
    this.setState({ userList: response.data, loading: false })
  }
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        {this.state.loading ? <Spinner /> : null}
        <div className="container">
          <Users users={this.state.userList} />
        </div>
      </div>
    )
  }
}

export default App;