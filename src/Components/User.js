import React from 'react'
import PropTypes from 'prop-types';

const User = ({ user: { avatar_url, login, url } }) => {
    return (
        <div className="card text-center" style={userStyle}>
            <img
                alt={login}
                src={avatar_url}
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <a className="btn btn-dark btn-sm my-1" href={url}>More</a>
        </div>
    )
}

const userStyle = {
    width: '21%',
    margin: '15px'
}

User.propTypes = {
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    url: PropTypes.string
}
export default User;