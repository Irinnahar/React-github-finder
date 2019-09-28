import React from 'react'
import './Alert.css';

const Alert = ({ alert }) => {
    return (
        <div className={`alert alert-${alert.type}`}>
            <i className="material-icons">{alert.icon}</i>
            {alert.text}
        </div>
    )
}

export default Alert;