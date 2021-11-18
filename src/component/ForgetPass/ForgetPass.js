import React,{useState} from 'react'
import '../Login/Login.css'
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


    const ForgetPass = async() =>
    {
        if(check)
        {
            let item={
                username
                };
                                    
            fetch(url + "/auth/password",{
                crossDomain:true,
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then(async(response) => {
                if(response.status === 201){
                    response = await response.json();
                    toast.success(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                }else{
                    toast.error("Username does not exist!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Username does not exist!\n' + response.statusText);
                }               
            })
            .then(response => alert(response))
            .catch( err => console.log(err));
        }       
    }


    

    return (
    <section>
        <div className="container">
            <div className="user signupBox">
                <div className="formBox">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <h2 >Account recovery</h2>
                            <h5>This helps show that this account really belongs to you</h5>
                            
                            <div className="floating-label-group">
                                <div className="input-box">
                                    <input type="text"
                                           name="username" 
                                           value={username} 
                                           onChange={(e)=>setemail(e.target.value)}
                                           autoComplete="off" autoFocus required/>  
                                    <label className="floating-label">Username</label>  
                                    {error && <div className='error'><p>{error}!</p></div>} 
                                </div>
                            </div>
                        </div>

                        <div className="button_containar1">
                            <button className="yellow_buttons1" type="submit" formNoValidate onClick={ForgetPass}  value="send" style={{ fontSize: '13px' , margin:30}}>Get a verification code </button>
                        </div>
                        <p className="checklogin" style={{marginRight:-30 , marginTop:-20}}><p></p> <Link to="/">Already have an account? Sign in</Link></p>
                        {/* <p ><Link to="/reset">changepass</Link></p> */}
                    </form>
                </div>
                
                <div class="imgBox">
                    <h1>Welcome Back!</h1>
                    <p> <br/>To keep connected with us please login</p>
                    <p> with your personal info<br/><br/></p>
                    <p><Link to="/" style={{ color:'white'}}>SIGN IN</Link></p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ForgetPass
