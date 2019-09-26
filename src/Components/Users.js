import React from 'react'
import User from './User';

const Users = (props) => {
    return (
        <div style={usersStyle}>
            {props.users.map(user => {
                return < User user={user} key={user.id} />
            })}
        </div>
    )
}

const usersStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
export default Users;