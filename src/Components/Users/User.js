import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {
        const { name } = this.props.user;
        console.log(this.props.user)
        const { loading } = this.props;
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default User;