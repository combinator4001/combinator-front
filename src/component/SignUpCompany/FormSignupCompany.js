import React , {useState} from 'react';
import validate from './validateInfo';
import valid1 from './valid';
import url from '../../variables';
import {  Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";


const FormSignupCompany = ({history}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
          
    
    const [namecompany,setNamecom]=useState("");
    const [nameowner,setnameowner]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");
    const owners=[];
    let errors = "";
    if(isSubmitting===true)
    {
        errors=validate({namecompany,nameowner,username,email,password,password2});
    }
    const check=valid1({namecompany,nameowner,username,email,password,password2});

    const reset =() =>{
        setNamecom("");
        setnameowner("");
        setusername("");
        setemail("");
        setlpass("");
        setlpass2("");
    }



    const handleSubmit = (e) => {
        setIsSubmitting(true);
        e.preventDefault();                            
    };

    const signup = () =>
    {
        if(check)
        {
            owners[0]=nameowner;
            let item = {
                username,
                password,
                name:namecompany ,
                owners:owners,
                email
            };
            console.warn(item);
            

            fetch(url + "/company",{
                crossDomain:true,
                method:'POST',
                mode: 'cors',
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
                else {
                    toast.error("Failed to register, try again ", {
                        position: "top-right",
                        closeOnClick: true
                    });                   
                }
            })
            .catch( err => console.log(err));
        }
    }

    return (
        <>
        <section>
            <div className="container">
                <div className="user signupBox">
                    <div className="formBox">
                        <form className="form" onSubmit={(e)=>handleSubmit(e)} >
                            <div className="user-details">
                                <h2 >Create Account</h2>
                                
                                <div className="floating-label-group">
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="namecompany"
                                               type="namecompany" 
                                               name="namecompany"
                                               value={namecompany}
                                               onChange={ (e)=> setNamecom(e.target.value)}
                                               autoComplete="off" autoFocus required/>   
                                        <label class="floating-label">Name</label> 
                                        {errors.namecompany ?
                                         errors.namecompany && <div className='error'><p>{errors.namecompany}!</p></div> :
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>
                                    
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="nameowner"
                                               type="nameowner" 
                                               name="nameowner"
                                               value={nameowner}
                                               onChange={ (e)=> setnameowner(e.target.value)}
                                               autoComplete="off" autoFocus required/>   
                                        <label  style={{marginLeft:165}}  class="floating-label">Owner</label> 
                                        {errors.nameowner ?
                                         errors.nameowner && <div className='error'><p style={{marginLeft:14}} >{errors.nameowner}!</p></div> :
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
                                        <label class="floating-label">Username</label> 
                                        {errors.username && <div className='error'><p>{errors.username}!</p></div>} 
                                    </div>
                                </div>

                                <div className="floating-label-group">
                                    <div className="input-box">
                                        <input id="email"
                                               type="text" 
                                               name="email"
                                               value={email}
                                               onChange={ (e)=> setemail(e.target.value)}
                                               autoComplete="off" autoFocus required/>   
                                        <label class="floating-label">Email</label> 
                                        {errors.email && <div className='error'><p>{errors.email}!</p></div>}                   
                                    </div>
                                </div>

                                <div className="floating-label-group">
                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="password"
                                               type="Pass" 
                                               name="password"
                                               value={password}
                                               onChange={ (e)=> setlpass(e.target.value)}
                                               autoComplete="off" autoFocus required/>   
                                        <label class="floating-label">Password</label> 
                                        {errors.password ?
                                        errors.password && <div className='error'><p>{errors.password}!</p></div> :
                                        <div className='error' style={{color:'white'}}><p>.</p></div>}
                                    </div>

                                    <div className="input-box" style={{display:'inline-block'}}>
                                        <input id="password2"
                                               type="Confirm" 
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
                            <p className="check1" style={{marginLeft:133}}><p></p> <Link to="/person">User Sign up</Link></p>
                            <p className="checklogin" style={{marginRight:-30}}><p></p> <Link to="/">Already have an account? Sign in</Link></p>
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
    </>
    )
}

export default withRouter(FormSignupCompany);
