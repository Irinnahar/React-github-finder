import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Repos from '../Repos/Repos';
import GithubContext from '../Context/Github/GithubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { loading, user, getUser, repos, getRepos } = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getRepos(match.params.login);
        // eslint-disable-next-line 
    }, [])

    const { name, avatar_url, bio, blog, company, followers, following,
        public_gists, hireable, html_url, public_repos, login, location } = user;


    if (loading) {
        return <Spinner />
    }
    return (
        <div>
            <Fragment>
                <Link className="btn btn-light btn-md my-1" to='/'>Back to Search </Link>
                Hireable : {' '}
                {hireable ? <i className="material-icons text-success" >add_circle</i> :
                    <i className="material-icons text-danger" >remove_circle</i>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{ width: '150px' }} />
                        <h1>{name} </h1>
                        <p>Location: {location}</p>
                    </div>
                    <div>
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{bio} </p>
                        </Fragment>
                        <a className="btn btn-dark btn-md my-1" href={html_url}>Visit Github Profile </a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website:</strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary"> Followers: {followers}</div>
                    <div className="badge badge-success"> Following: {following}</div>
                    <div className="badge badge-primary"> Public Repos: {public_repos}</div>
                    <div className="badge badge-info"> Public Gists: {public_gists}</div>
                </div>
                <div>
                    <Repos repos={repos} />
                </div>
            </Fragment>
        </div >
    )
}

export default User;