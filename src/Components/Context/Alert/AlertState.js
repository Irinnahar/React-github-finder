import React, { useReducer } from 'react';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (alert) => {
    dispatch({
      type: SET_ALERT,
      payload: { icon: alert.icon, type: alert.type, text: alert.text }
    })
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT
      })
    }, 5000)
  }

  return <AlertContext.Provider
    value={
      {
        alert: state,
        setAlert
      }
    }
  >
    {props.children}
  </AlertContext.Provider>
}

export default AlertState;