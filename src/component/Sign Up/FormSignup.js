import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {signUp} from '../../features/userSlice'
import './Form.css'
import validate from './validateInfo'
import valid1 from './valid'
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import SimpleReactValidator from "simple-react-validator";


const FormSignup = () => {
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

    const signup = () =>
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
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then( response => {
                if(response.status === 201){
                    toast.success("sign up successfully!", {
                        position: "top-center",
                        closeOnClick: true
                    });
                    localStorage.setItem("token",response.data.token);
                    reset();
                    return response.json();
                }else if(response.status === 400){
                    toast.error("Username already exists!", {
                        position: "top-center",
                        closeOnClick: true
                    });
                    throw new Error('Username already exists!\n' + response.statusText);
                }else {
                    toast.error("Failed to register, try again later", {
                        position: "top-center",
                        closeOnClick: true
                    });
                    throw new Error('Failed to register, try again later.\n' + response.statusText);
                }                

            })
            .then(response => alert(response))
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
        <div className="main_body">
        <div className="container">           
        <div className="title">Sign up</div>
        <form className="form" onSubmit={handleSubmit}>
            <div className="user-details">

                <div className="input-box">
                    <span className="details">First Name</span>
                    <input
                    id="firstname"
                    type="text" 
                    placeholder="Enter your first name"
                    name="firstname"
                   value={firstname}
                   onChange={ (e)=> setfName(e.target.value)}
                    />                   
                    {errors.firstname && <p>{errors.firstname}!</p>}                
                </div>

                <div className="input-box">
                    <span className="details">Last Name</span>
                    <input
                    id="lastname"
                    type="text" 
                    placeholder="Enter your last name" 
                    name="lastname"
                    value={lastname}
                    onChange={ (e)=> setlname(e.target.value)}
                    />
                    {errors.lastname && <p>{errors.lastname}!</p>} 
                </div>

                
                <div className="input-box">
                    <span className="details">Username</span>
                    <input 
                    id="username"
                    type="text" 
                    placeholder="Enter your username" 
                    name="username"
                    value={username}
                    onChange={ (e)=> setusername(e.target.value)}
                    />
                    {errors.username && <p>{errors.username}!</p>} 
                </div>

                <div className="input-box">
                    <span className="details">Email</span>
                    <input
                    id="email"
                    type="text" 
                    placeholder="Enter your email" 
                    name="email"
                    value={email}
                    onChange={ (e)=> setemail(e.target.value)}
                    />
                    {errors.email && <p>{errors.email}!</p>}                   
                </div>


                <div className="input-box">
                    <span className="details">Password</span>
                    <input
                    id="password"
                    type="password" 
                    placeholder="Enter your password" 
                    name="password"
                    value={password}
                    onChange={ (e)=> setlpass(e.target.value)}
                    />
                    {errors.password && <p>{errors.password}!</p>} 
                </div>

                <div className="input-box">
                    <span className="details">Confirm Password</span>
                    <input
                    id="password2"
                    type="password" 
                    placeholder="Confirm your password" 
                    name="password2"
                    value={password2}
                    onChange={(e)=>setlpass2(e.target.value) }         
                    />
                    {errors.password2 && <p>{errors.password2}!</p>} 
                </div>               
            </div>
            <p className="check">Do yiu have an Account? <Link to="/">log in</Link></p>
            <p className="check"><Link to="/company">Are you Company? </Link></p>                   
            <div className="button">
                <input type="submit" onClick={signup} value="Sign up"/>                             
            </div>
        </form>

    </div>
    </div>
        
    </>
    )
}
export default FormSignup
