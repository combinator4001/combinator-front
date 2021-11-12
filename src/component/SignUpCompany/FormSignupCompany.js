import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {signUp} from '../../features/userSlice';
import validate from './validateInfo';
import valid1 from './valid';
import url from '../../variables';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

const FormSignupCompany = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
          
    
    const [namecompany,setNamecom]=useState("");
    const [nameowner,setnameowner]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");

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
            let item = {
                username,
                password,
                name:namecompany ,
                nameowner:nameowner,              
                email
            };
            console.warn(item);
            

            fetch(url + "/company",{
                method:'POST',
                headers: {'Content-Type' : 'application/json'},
                body:JSON.stringify(item)
            })
            .then( response => {
                if(response.status === 201){
                    toast.success("sign up successfully!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    reset();
                    return response.json();
                }else if(response.status === 401){
                    toast.error("Username already exists!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('Username already exists!\n' + response.statusText);
                }else {
                    toast.error("Failed to register, try again ", {
                        position: "top-right",
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
        <form className="form" onSubmit={(e)=>handleSubmit(e)} >
            <div className="user-details">

                <div className="input-box">
                    <span className="details">Name of Company</span>
                    <input
                    id="namecompany"
                    type="text" 
                    placeholder="Enter your name of company"
                    name="namecompany"
                   value={namecompany}
                   onChange={ (e)=> setNamecom(e.target.value)}
                    />                   
                    {errors.namecompany && <p>{errors.namecompany}!</p>}                
                </div>

                <div className="input-box">
                    <span className="details">Name of owner</span>
                    <input
                    id="nameowner"
                    type="text" 
                    placeholder="Enter name of owner" 
                    name="nameowner"
                    value={nameowner}
                    onChange={ (e)=> setnameowner(e.target.value)}
                    />
                    {errors.nameowner && <p>{errors.nameowner}!</p>} 
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

            <div className="button_containar">
                <button className="yellow_buttons" type="submit" onClick={signup} value="Sign up" >Sign up</button>
            </div>

            <p className="check"><p>Do you have an Account?</p> <Link to="/">log in</Link></p>
            <p className="check"><p>Do you want user account ?</p><Link to="/person">Sign up as company </Link></p>        

        </form>

    </div>
    </div>
        
    </>
    )
}

export default FormSignupCompany
