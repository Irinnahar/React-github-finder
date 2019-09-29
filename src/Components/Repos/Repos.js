import React from 'react'
import RepoItem from './ReposItem';
import PropTypes from 'prop-types'

const Repos = ({ repos }) => {
    return (

        repos.map(repo => {
            console.log(repo)
            return <RepoItem repo={repo} />
        })


    )
}
Repos.propTypes = {
    repos: PropTypes.array.isRequired,
}
export default Repos;