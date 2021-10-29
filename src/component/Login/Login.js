import React , {useState} from 'react';
import './Login.css';
import { useDispatch} from 'react-redux';
import {login} from '../../features/userSlice'
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {login} from '../../actions/index';
//import {signUp} from '../../actions/index';


const Login =() => {
	const [username,setName]=useState("");
	const [pass,setpass]=useState("");

	const dispach = useDispatch();
  	
	const loginButton = (event) =>
	{
		if(username && pass)
		{
			fetch(url + "/login",{
				method:'POST',
				headers: {'Content-Type' : 'application/json'},
				body:JSON.stringify({
					username: username,
					password : pass
				})
			})
			.then(res=>{
				if(res.status === 200){
					return res.json();
				}else{
					throw new Error ("failed to login");
				}
			})
			.then((res)=>{
				alert(`welcome ${res.username} with ${res.role} role`);
				event.preventDefault();
				dispach(login({
					name: username,
					isLoggedIn : true
				}))            
			})
			.catch( err => console.log(err));
		}
		else{
			alert('fill');
		}     
	}	     

  return (
    <>
        <div className="main_body1">
            <div className="container1">
                <div className="title1">Log in</div>
                <form>
                    <div className="user-details1">
                        <div className="input-box1">
                            <span className="details1">Username</span>
                            <input 
                            type="text" 
                            placeholder="Enter your username" 
                            required 
                            value={username}
                            onChange={(e)=> setName(e.target.value)}/>
                        </div>

                        <div className="input-box1">
                            <span className="details1">Password</span>
                            <input 
                            type="password" 
                            placeholder="Enter your Password" 
                            required
                            value={pass}
                            onChange={(e)=> setpass(e.target.value)}/>
                            
                        </div>
                    </div>
                    <div className="choose-detail1">
                        <div className="login1">
                            <span className="check1">Dont have an account? </span>
                            <Link to="/FormSignup">Sign up</Link>
                        </div>
                    </div>            
                    <div className="button1">
                        <input type="submit" onClick={loginButton}  value="Log in"/>
                    </div>
                </form>
            </div>
        </div>      
    </>
  );
}


export default Login;