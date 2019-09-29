import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
    return (
        <div className="card text-center" style={userStyle}>
            <img
                alt={login}
                src={avatar_url}
                className="round-img"
                style={{ width: '60px' }}
            />
            <h3>{login}</h3>
            <Link className="btn btn-dark btn-sm my-1" to={`user/${login}`}>More </Link>
        </div>
    )
}

const userStyle = {
    width: '21%',
    margin: '15px'
}

UserItem.propTypes = {
    avatar_url: PropTypes.string,
    login: PropTypes.string,
    html_url: PropTypes.string
}
export default UserItem;