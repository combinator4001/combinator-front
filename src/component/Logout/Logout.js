import React  from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {logout, selectuser} from '../../features/userSlice'

const Logout = () => {
    const user = useSelector(selectuser);
    const dispatch = useDispatch();
    const handleLogout = (e)=>{
        e.preventDefault();
        
        dispatch(logout());
    }

    return (
        <>
            <div>
                <h1>welcome <span className="username">{user.username}</span></h1>
                <button className="Logout_btn" onClick={(e)=>handleLogout(e)}>Logout</button>
            </div>
        </>
    )
}

export default Logout
