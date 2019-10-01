import React, { useContext } from 'react'
import RepoItem from './ReposItem';
import GithubContext from '../Context/Github/GithubContext';

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext;
    return (
        repos.map(repo => {
            return <RepoItem repo={repo} />
        })

    )
}
export default Repos;