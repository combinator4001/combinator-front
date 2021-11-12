import React , {useState} from 'react';
import './Login.css';
import doToggle from '../ToggleFunc.js';
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
            

            fetch(url + "/auth/login",{
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
                        position: "top-right",
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
				position: "top-right",
				closeOnClick: true
			});
		}     
	}	     

  return (
    <>
    <section>
        <div className="container">
            <div className="user signinBox">
                <div className="imgBox">
                    <h1>Hello, Friend!</h1>
                    <p> <br/>Enter your personal details and start</p>
                    <p> journey with us<br/><br/></p>
                    <p><Link to="/person" onClick= {doToggle}>SIGN UP</Link></p>
                </div>	
                <div className="formBox">
                    <form  onSubmit={(e)=>handleSubmit(e)}>
                        <h1>Sign in</h1>
                        <div className="user-details1">
                            <div className="input-box1">
                                <div className="floating-label-group">
                                    <input type="text" 
                                           value={username}
                                           onChange={(e)=> setName(e.target.value)}
                                           autoComplete="off" autoFocus required />
                                    <label class="floating-label">Username</label>   
                                </div>
                            </div>
                            <div className="input-box1">
                                <div className="floating-label-group">
                                    <input type="password" 
                                           value={pass}
                                           onChange={(e)=> setpass(e.target.value)}
                                           autoComplete="off" autoFocus required />
                                    <label class="floating-label">Password</label>  
                                </div>
                           </div>
                        </div>
                        <p className="check1"><p></p> <Link to="/forgetpassword">Forgot password</Link></p>
                        <div className="button_containar1">
                            <button className="yellow_buttons1" type="submit" onClick={loginButton} value="log in" >Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default withRouter(Login);