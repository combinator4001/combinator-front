import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {signUp} from '../../features/userSlice'
import './Form.css'
import validate from './validateInfo'

const FormSignup = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

  //setErrors(validate(values));
        
  
    
    const [firstname,setfName]=useState("");
    const [lastname,setlname]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");

    

    const [errors,con]=validate({firstname,lastname,username,email,password,password2});

    const dispach = useDispatch();

    const handleSubmit = (e) => {
        setIsSubmitting(true);
       
        e.preventDefault();
        
        if(con){
            dispach(signUp({
                firstname:firstname ,
                lastname:lastname,
                username:username,
                email:email,
                password:password,
                isLoggedIn:true
        
            })
          );
        }


          
        
    };

    function signup()
    {
        if(con)
        {
        let item={firstname,lastname,username,email,password}
        console.warn(item)

        fetch("#",{
            method:'POST',
            body:JSON.stringify(item)
        })
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

                <div class="input-box">
                    <span className="details">Email</span>
                    <input
                    id="email"
                    type="email" 
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
            <div className="choose-detail">

                <div className="login">
                    <div className="link">
                    <span className="check">Are you ready have an account? </span>
                    <a href="#">Log in</a>
                    </div>
                    <div className="link">
                    <span className="check">Are you Company? </span>
                    <a href="#">Signup</a>
                    </div>
                </div>
            </div>            
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
