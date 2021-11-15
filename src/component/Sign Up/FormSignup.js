import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {signUp} from '../../features/userSlice'
import '../Login/Login.css'
import validate from './validateInfo'
import valid1 from './valid'
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import SimpleReactValidator from "simple-react-validator";
import { withRouter } from "react-router-dom";

const FormSignup = ({history}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);


             
    
    const [firstname,setfName]=useState("");
    const [lastname,setlname]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");

    

    let errors = "";
    if(isSubmitting===true)
    {
        errors=validate({firstname,lastname,username,email,password,password2});
    }
    const check= valid1 ({firstname,lastname,username,email,password,password2})


    const reset =() =>{
        setfName("");
        setlname("");
        setusername("");
        setemail("");
        setlpass("");
        setlpass2("");
    }


    const handleSubmit = async event=> {
        setIsSubmitting(true);        
        event.preventDefault();       
    };

    const signup = async () =>
    {
        if(check)
        {
            let item = {
                username,
                password,
                firstName: firstname,
                lastName : lastname,                
                email
            };
            console.warn(item);
            

            fetch(url + "/person",{
                crossDomain:true,
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then( async (response) => {
                if(response.status === 201){
                    response = await response.json();
                    toast.success(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                    history.replace("/");
                }else if(response.status === 400){
                    response = await response.json();
                    toast.error(response.message[0], {
                        position: "top-right",
                        closeOnClick: true
                    });                    
                }else if(response.status === 401){
                    response = await response.json();
                    toast.error(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                } 
                else{
                    toast.error("Failed to register, try again later.", {
                        position: "top-right",
                        closeOnClick: true
                    });
                }               

            })
            .catch( err => console.log(err));

            // axios
            //     .post(
            //         url + "/FormSignup",
            //         JSON.stringify(item),
            //         {
            //             headers: {
            //                 'Content-Type' : 'application/json'} 
            //         }
            //     ).then(response => {
            //         if(response.status === 200){
            //             setMessage('sign up successfully!');
            //             toast.success("jj");
            //             reset();
            //             return response.json();
            //         }
            //         else if(response.status === 400){
            //             setMessage('Username already exists!');
            //             throw new Error('Username already exists!\n' + response.statusText);
            //         }else {
            //             reset();                        
            //             setMessage('Failed to register, try again later.');
            //             throw new Error('Failed to register, try again later.\n' + response.statusText);
            //         }

            //     }
            //     )
            //     .then(response => alert(response))
            //     .catch( err => console.log(err));
        }       
    }

    return (
        <> 
        <section>
            <div className="container">
                <div className="user signupBox">
                    <div className="formBox">
                        <form onSubmit={handleSubmit} >
                            <div className="user-details">
                                <h2 >Create Account</h2>
    
                                <div className="floating-label-group">
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="firstname"
                                               type="firstname" 
                                               name="firstname"
                                               value={firstname}
                                               onChange={ (e)=> setfName(e.target.value)}
                                               autoComplete="off" autoFocus required/>   
                                        <label class="floating-label">Firstname</label> 
                                        {errors.firstname ?
                                         errors.firstname && <div className='error'><p>{errors.firstname}!</p></div> :
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>
    
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="lastname"
                                               type="lastname" 
                                               name="lastname"
                                               value={lastname}
                                               onChange={ (e)=> setlname(e.target.value)}
                                               autoComplete="off" autoFocus required/>  
                                        <label style={{marginLeft:165}} className="floating-label">Lastname</label>  
                                        {errors.lastname ?
                                        errors.lastname && <div className='error'><p style={{marginLeft:14}} >{errors.lastname}!</p></div> : 
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>
                                </div>
    
                                <div className="floating-label-group">
                                    <div className="input-box">
                                        <input id="username"
                                               type="text"  
                                               name="username"
                                               value={username}
                                               onChange={ (e)=> setusername(e.target.value)}
                                               autoComplete="off" autoFocus required/>  
                                        <label className="floating-label">Username</label>  
                                        {errors.username && <div className='error'><p name="d">{errors.username}!</p></div>} 
                                    </div>
                                </div>
    
                                <div className="floating-label-group">
                                    <div className="input-box">
                                        <input id="email"
                                               type="text" 
                                               name="email"
                                               value={email}
                                               onChange={ (e)=> setemail(e.target.value)}
                                               autoComplete="off" autoFocus required />  
                                        <label className="floating-label">Email</label> 
                                        {errors.email && <div className='error'><p>{errors.email}!</p></div>}                   
                                    </div>
                                </div>
    
                                <div className="floating-label-group">
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="password"
                                               type="pass" 
                                               name="password"
                                               value={password}
                                               onChange={ (e)=> setlpass(e.target.value)}
                                               autoComplete="off" autoFocus required />  
                                        <label className="floating-label">Password</label> 
                                        {errors.password ?
                                        errors.password &&  <div className='error'><p>{errors.password}!</p></div> :
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>
    
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="password2"
                                               type="confirm" 
                                               name="password2"
                                               value={password2}
                                               onChange={(e)=>setlpass2(e.target.value) }         
                                               autoComplete="off" autoFocus required />  
                                        <label  style={{marginLeft:165}}  className="floating-label">Confirm</label> 
                                        {errors.password2 ?
                                        errors.password2 && <div className='error'><p style={{marginLeft:14}} >{errors.password2}!</p></div> :
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>               
                                </div>
                            </div>    
                            <br/>
                            <div className="button_containar1">
                                <button className="yellow_buttons1" type="submit" formNoValidate onClick={signup} value="Sign up" >Sign up</button>
                            </div>
                            <p className="checklogin" style={{marginLeft:89}}><p></p> <Link to="/">SIGN IN</Link></p>
                            <p className="check1" style={{marginLeft:89}}><p></p> <Link to="/company">Extera forms for company</Link></p>
                            
                        </form>
                        
                    </div>
                    <div class="imgBox">
                        <h1>Welcome Back!</h1>
                        <p> <br/>To keep connected with us please login</p>
                        <p> with your personal info<br/><br/></p>
                        <p><Link to="/">SIGN IN</Link></p>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    }
    export default FormSignup
    