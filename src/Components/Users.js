import React from 'react'
import User from './User';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    if (loading) {
        return <Spinner />
    } else {
        return <div style={usersStyle}>
            {users.map(user => {
                return < User user={user} key={user.id} />
            })}
        </div>
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const usersStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
export default Users;