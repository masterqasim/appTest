import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const islogin = (data) => {
    return (dispatch, getState) => {
            dispatch({ type: 'ISLOGIN',data })
    }
};
export const signUpAction = (data)=> {
        return (dispatch, getState) =>{
                dispatch({type:'SIGN_UP_ACTION',data})
        }
}
export const signOutAction = ()=> {
        return (dispatch, getState) =>{
                dispatch({type:'SIGN_OUT'})
        }
}