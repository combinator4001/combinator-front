import React,{useState} from 'react'
import './ForgetPass.css'


const ForgetPass = () => {

    const[email,setemail]=useState("")


    const validate =(values) =>{
        let error = {};
        let condition = true
         if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
        {
            error.email="Email address is invalid"
            condition = false;
            
        }
        return [error,condition];
    }
    const [error,con]=validate(email);



    function Forgetpass(){
    if(con)
    {
        console.warn(email)
        fetch("#",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Concept-type':'application/json'
            },
            body:JSON.stringify(email)
        })
        .then(res=>res.json())
        .then((email)=>{            
            console.log(email);
            this.setState({resData:email.token,
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
          // result =  result.json()
          // localStorage.setItem("login-info",JSON.stringify(result))
    }

    

    return (
        <div className="fa3">
            <div className="container3">
        <div className="title3">Forget Password</div>
        <form onSubmit={validate(email)}>
            <div className="user-details3">
                <div className="input-box3">
                    <span className="details3">Email</span>
                    <input 
                    type="email"
                    name="email" 
                    placeholder="Enter your email" 
                    required
                    value={email} 
                    onChange={(e)=>setemail(e.target.value)}/>
                    {error.email && <p>{error.email}!</p>}                   
                </div>                            
            </div>
            <div className="choose-detail3">
                    
                    <a href="#">Going back to login</a>
            </div>            
            <div className="button3">
                <input type="submit" onClick={Forgetpass} value="Send Verification Code"/>
            </div>
        </form>
    </div>
    </div>
    )
}

export default ForgetPass
