import React from 'react'
import { useDispatch ,useSelector} from "react-redux";

export default function Dashboard() {
    const userInfo = useSelector(state => state.globalReducer.user)
    return (
        <div style={{marginTop:'100px'}}>
            {userInfo?
            <p>Wellcome {userInfo}</p>:
            <p>Wellcome  your data will recieve from data base</p>
            }
        </div>
    )
}

