import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ clearUser, showClearBtn, setAlert, searchUser }) => {
    const [text, setText] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert(
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
                Boolean(showClearBtn) ?
                    <button className="btn btn-block btn-gray" onClick={clearUser}>Clear</button>
                    : null
            }
        </div>
    )

}

Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}
export default Search;
