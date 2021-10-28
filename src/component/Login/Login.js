import React , {useState} from 'react';
import './Login.css';
import {useSelector , useDispatch} from 'react-redux';
import {login} from '../../features/userSlice'
//import {login} from '../../actions/index';
//import {signUp} from '../../actions/index';


const Login =() => {
  const [username,setName]=useState("");
  const [pass,setpass]=useState("");

  const dispach = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    
      dispach(login({
        name:username,
        pass:pass,
        isLoggedIn:true
  
      })
    );
    
    
  };

  function login()
  {
    if(username.trim() && pass.trim())
  {
    let item={username,pass}
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
    <div className="main_body1">
    <div className="container1">
        <div className="title1">Log in</div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="user-details1">
                <div className="input-box1">
                    <span className="details1">Username</span>
                    <input 
                    type="text" 
                    placeholder="Enter your username" 
                    required 
                    value={username}
                    onChange={(e)=> setName(e.target.value)}/>
                </div>

                <div className="input-box1">
                    <span className="details1">Password</span>
                    <input 
                    type="password" 
                    placeholder="Enter your Password" 
                    required
                    value={pass}
                    onChange={(e)=> setpass(e.target.value)}/>
                    
                </div>
            </div>
            <div className="choose-detail1">
                <div className="login1">
                    <span className="check1">Dont have an account? </span>
                    <a href="#">Sign up</a>
                </div>
            </div>            
            <div className="button1">
                <input type="submit" onChange={login}  value="Log in"/>
            </div>
        </form>

    </div>
    </div>
      
    </>
  );
}
/*function required(){
  const username = document.forms["mainForm"]["username"].value;
  const pass = document.forms["mainForm"]["pass"].value;
  if(username ==""||pass=="")
  {
    alert("Please input a Value");
    return false;
  }
  else 
  {
    alert('Code has accepted : you can try another');
    return true; 
  }
  
  /*if(document. getElementById("pass"). value == null ||document. getElementById("pass"). value == " " ||document. getElementById("username"). value == null ||document. getElementById("username"). value == " ")
  {
  alert("empty")
  return false;
  }else{
    return true;
  }

}*/

export default Login;