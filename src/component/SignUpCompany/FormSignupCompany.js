import React , {useState} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {signUp} from '../../features/userSlice'

import validate from './validateInfo'

const FormSignupCompany = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

  //setErrors(validate(values));
        
  
    
    const [namecompany,setNamecom]=useState("");
    const [nameowner,setnameowner]=useState("");
    const [username,setusername]=useState("");
    const [email,setemail]=useState("");
    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");

    const [errors,con]=validate({namecompany,nameowner,username,email,password,password2});
    const dispach = useDispatch();

    const handleSubmit = (e) => {
        setIsSubmitting(true);
        e.preventDefault();
        
        if(con){
            dispach(signUp({
                namecompany:namecompany ,
                nameowner:nameowner,
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
        let item={namecompany,nameowner,username,email,password}
        console.warn(item)

        fetch("#",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Concept-type':'application/json'
            },
            body:JSON.stringify(item)
        })
        .then(res=>res.json())
        .then((item)=>{            
            console.log(item);
            this.setState({resData:item.token,
            isAuthenticated:true
        })
                        
        },
        (error) =>{
            console.log(error)
            this.setState({
                isAuthenticated:false,
                resData:'No Data From Server'
            })
        }
        );
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
                    <span className="check">Are you user? </span>
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

export default FormSignupCompany
