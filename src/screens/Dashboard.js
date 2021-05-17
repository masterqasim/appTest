import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { useHistory } from "react-router";

export default function Dashboard() {
    const history = useHistory();
    useEffect(() => {
        if(!login){
            history.push("/SignIn")
        }
    }, [])
    const userInfo = useSelector(state => state.globalReducer.userInfo)
    const login = useSelector(state => state.globalReducer.loggedIn)
    
    return (
        <div style={{marginTop:'100px'}}>
            {userInfo.email? 
            <p>Wellcome {userInfo.fName + " " + userInfo.lName + " " + "email: " + userInfo.email}</p>:
            <p>something went wrong</p>
             }
        </div>
    )
}

