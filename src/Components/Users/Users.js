import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({ users, loading }) => {
    return (
        <div>
            {loading ? <Spinner /> :
                <div style={usersStyle}>
                    {users.map(user => {
                        return < UserItem user={user} key={user.id} />
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