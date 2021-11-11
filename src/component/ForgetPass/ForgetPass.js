import React,{useState} from 'react'
import './ForgetPass.css'
import { toast } from 'react-toastify';
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ForgetPass = () => {

    const[username,setemail]=useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    

    let error = "";
    let check=false;
    if(isSubmitting===true)
    {
        if(!username){
            error="Username required" 
            check=false;      
        }  
       else if(username.length<6)
        {
            error="Username needs to be 6 characters or more"
            check=false;        
        }
        else{
            check=true;
        }
    }




    const handleSubmit = async event=> {
        setIsSubmitting(true);        
        event.preventDefault();       
    };


    const ForgetPass = () =>
    {
        if(check)
        {
                                    
            fetch(url + "/forgetpassword",{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(username)
            })
            .then( response => {
                if(response.status === 201){
                    return response.json();
                }else{
                    toast.error("Username is not exists!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Username is not exist!\n' + response.statusText);
                }               
            })
            .then(response => alert(response))
            .catch( err => console.log(err));
        }       
    }


    

    return (
        <div className="fa3">
            <div className="container3">
        <div className="title3">Forget Password</div>
        <form onSubmit={handleSubmit}>
            <div className="user-details3">
                <div className="input-box3">
                    <span className="details3">Username</span>
                    <input 
                    type="text"
                    name="username" 
                    placeholder="Enter your email" 
                    value={username} 
                    onChange={(e)=>setemail(e.target.value)}/>
                    {error && <p>{error}!</p>}                   
                </div>                            
            </div>

            <div className="button_containar3">
                <button className="yellow_buttons3" type="submit" onClick={ForgetPass}  value="send" >Send verification code </button>
            </div>

            <p ><Link to="/changepassword">changepass</Link></p>

        </form>
    </div>
    </div>
    )
}

export default ForgetPass
