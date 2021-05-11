import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const islogin = (data) => {
    return (dispatch, getState) => {
        
            dispatch({ type: 'ISLOGIN',data })
        
    }
  };