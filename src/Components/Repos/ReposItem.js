import React, { Component } from 'react'

class RepoItem extends Component {
    render() {
        const { name, html_url } = this.props.repo;
        return (
            <div className="card">
                <a href={html_url}> {name} </a>
            </div>
        )
    }
}

export default RepoItem;