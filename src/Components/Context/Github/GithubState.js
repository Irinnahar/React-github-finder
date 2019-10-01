import React, { useReducer } from 'react';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import axios from 'axios';
import {
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
  SEARCH_USERS
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
  // search users
  const searchUser = async name => {
    setLoading();
    const response = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    })
  }

  // get user
  const getUser = async name => {
    setLoading(true);
    const response = await axios.get(`https://api.github.com/users/${name}?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    dispatch({
      type: GET_USER,
      payload: response.data
    })
  }

  //  get repos
  const getRepos = async name => {
    setLoading();
    const response = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=created:asc?client_id=df05c58246f1c0801fc7
      &client_secret=158b800027ce140f07c616006632a3417c855116`);
    dispatch({
      type: GET_REPOS,
      payload: response.data
    })
  }

  // clear User
  const clearUser = () => dispatch({ type: CLEAR_USERS });

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  const [state, dispatch] = useReducer(GithubReducer, initialState)
  return <GithubContext.Provider
    value={
      {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUser,
        getUser,
        clearUser,
        getRepos
      }
    }
  >
    {props.children}
  </GithubContext.Provider>
}

export default GithubState;
