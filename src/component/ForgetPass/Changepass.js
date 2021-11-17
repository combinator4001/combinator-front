import React , {useState} from 'react';
import  './Changepass.css'
import { toast } from 'react-toastify';
import url from '../../variables';
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

const Changepass = ({history}) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [password,setlpass]=useState("");
    const [password2,setlpass2]=useState("");

    let errors={};
    let check=false;
    let t=true;
    if(isSubmitting===true)
    {
        if(!password.trim())
        {
            errors.password ='Password is required'
            t=false;        
        }
        else if(password.length<6){
            errors.password='Password needs to be 6 characters or more' 
            t=false;      
        }
        if(!password2.trim())
        {
            errors.password2='Password is required'
            t=false;
        }
    
       else if(password2!==password)
        {
            errors.password2='Password do not match'
            t=false;
            
        }
        if(t)
        {
            check=true;
        }
    }
    const { forgetPassToken } = useParams();

    const handleSubmit = async event=> {
        setIsSubmitting(true);        
        event.preventDefault();       
    };

    const ChangePassbtn = async() =>{
        if(check)
        {
            let item={
            newPassword:password
            };
                                    
            fetch(url + "/auth/password",{
                crossDomain:true,
                method:'PUT',
                headers: {
                    'Content-Type' : 'application/json' ,
                    "Authorization" : `Bearer ${forgetPassToken}`
                },
                body:JSON.stringify(item)
            })
            .then(async(response) => {
                if(response.status === 200){
                    response = await response.json();
                    toast.success(response.message, {
                        position: "top-right",
                        closeOnClick: true
                    });
                    history.replace("/");
                }else{
                    //401
                    //500
                    toast.error("fail!", {
                        position: "top-right",
                        closeOnClick: true
                    });
                    throw new Error('fail!\n' + response.statusText);
                }               
            })
            .then(response => alert(response))
            .catch( err => console.log(err));
        } 



    }



    return (
        <div className="fa2">
        <div className="container2">
        <div className="title2">Change Password</div>
        <form onSubmit={handleSubmit}>
            <div className="user-details2">

                <div className="input-box2">
                    <span className="details2">new Password</span>
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

                <div className="input-box2">
                    <span className="details2">Submit Password</span>
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
            <div className="button_containar2">
                <button className="yellow_buttons2" type="submit" onClick={ChangePassbtn}  value="Change" >Sumbit Change</button>
            </div>       
        </form>

    </div>
    </div>
    )
}

export default Changepass
