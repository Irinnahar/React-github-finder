import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from '../Context/Github/GithubContext';
import AlertContext from '../Context/Alert/AlertContext';

const Search = () => {
    const [text, setText] = useState('');
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const { clearUser, searchUser, users } = githubContext;

    const formSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert(
                {
                    icon: 'error_outline',
                    type: 'default',
                    text: 'Please enter name to continue'
                }
            )
        } else {
            searchUser(text);
            setText('');
        }

    }

    const onChange = (e) => {
        setText(e.target.value);
    }

    return (
        <div>
            <form className="form " onSubmit={formSubmit} id="formSearch">
                <input
                    type="text"
                    name="text"
                    placeholder="Search here"
                    onChange={onChange}
                    value={text}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-dark"
                    value="Search"
                />
            </form>
            {
                users.length > 0 ?
                    <button className="btn btn-block btn-gray" onClick={clearUser}>Clear</button>
                    : null
            }
        </div>
    )

}

export default Search;
