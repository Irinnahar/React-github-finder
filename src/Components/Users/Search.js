import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    state = {
        text: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert(
                {
                    icon: 'error_outline',
                    type: 'default',
                    text: 'Please enter name to continue'
                }
            )
        } else {
            this.props.searchUser(this.state.text);
            this.setState({ text: '' })
        }

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { clearUser, showClearBtn, showAlert } = this.props;
        return (
            <div>
                <form className="form " onSubmit={this.formSubmit} id="formSearch">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search here"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <input
                        type="submit"
                        className="btn btn-block btn-dark"
                        value="Search"
                    />
                </form>
                {
                    Boolean(showClearBtn) ?
                        <button className="btn btn-block btn-gray" onClick={clearUser}>Clear</button>
                        : null
                }
            </div>
        )
    }
}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search;
