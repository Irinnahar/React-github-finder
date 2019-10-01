import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../Context/Github/GithubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext
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


const usersStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}
export default Users;