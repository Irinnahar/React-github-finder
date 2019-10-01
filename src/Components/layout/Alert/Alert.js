import React, { useContext } from 'react'
import './Alert.css';
import AlertContext from '../../Context/Alert/AlertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext
    return (
        alert !== null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="material-icons">{alert.icon}</i>
                {alert.text}
            </div>
        )
    )
}

export default Alert;