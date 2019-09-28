import React from 'react'
import User from './User';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    return (
        <div>
            {loading ? <Spinner /> :
                <div style={usersStyle}>
                    {users.map(user => {
                        return < User user={user} key={user.id} />
                    })}
                </div>
            }
        </div>

    )
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