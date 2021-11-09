import React , {useState} from 'react';
import './Login.css';
import SimpleReactValidator from 'simple-react-validator';
import {useSelector , useDispatch} from 'react-redux';
import {login} from '../../features/userSlice'
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";


const Login =({history}) => {

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [username,setName]=useState("");
	const [pass,setpass]=useState("");

	const handleSubmit = (event) => {
        setIsSubmitting(true);        
        event.preventDefault();                            
    };

	const reset =() =>{
		setName("");
		setpass("");
    }
  	
	const loginButton = (event) =>
	{
		if(username && pass)
		{
			let item = {
				username,
				password : pass
            };
            console.warn(item);
            

            fetch(url + "/user/auth/login",{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then( response => {
                if(response.status === 201){
                    return response.json();
                }
                else{
                    toast.error("Failed to login, try again later", {
                        position: "top-center",
                        closeOnClick: true
                    });					
                    throw new Error('Failed to login, try again later.\n' + response.statusText);
                }                
            })
            .then(response => {
                console.log(response);
                localStorage.setItem("token",response.access_token);
                reset();
                history.replace("/profileuser");
            })
            .catch( err => console.log(err));
			
		}
		else{
            history.replace("/profileuser");
			toast.error("please fill!", {
				position: "top-center",
				closeOnClick: true
			});
		}     
	}	     

  return (
    <>
    <div className="main_body1">
    <div className="container1">
        <div className="title1">Log in</div>		
        <form  onSubmit={(e)=>handleSubmit(e)}>
            <div className="user-details1">
                <div className="input-box1">
                    <span className="details1">Username</span>
                    <input 
                    type="text" 
                    placeholder="Enter your username" 
                    value={username}
                    onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className="input-box1">
                    <span className="details1">Password</span>
                    <input 
                    type="password" 
                    placeholder="Enter your Password" 
                    value={pass}
                    onChange={(e)=> setpass(e.target.value)}/>
                    
                </div>
            </div>
            <p className="signup1">Don't have an Account? <Link to="/person">Sign UP</Link></p>
           
            <div className="button1">
                <input type="submit" onClick={loginButton}  value="Log in"/>
            </div>
        </form>

    </div>
    </div>
      
    </>
  );
}

export default withRouter(Login);