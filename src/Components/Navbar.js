import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar bg-primary">
                <h3>
                    {this.props.title}
                </h3>
            </div>
        )
    }
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Title'
}
export default Navbar;