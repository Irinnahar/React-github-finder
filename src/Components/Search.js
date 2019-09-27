import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: ''
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.props.searchUser(this.state.text);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <form className="form " onSubmit={this.formSubmit}>
                    <input type="text" name="text" placeholder="Search here" onChange={this.onChange} />
                    <input
                        type="submit"
                        className="btn btn-block btn-dark"
                        value="Search"
                    />
                </form>
                <button className="btn btn-block btn-gray">Clear</button>
            </div>
        )
    }
}

export default Search;
