import handle from "./FormSignup";

export default function validateInfo(values) {
    let errors={}
    
    if(!values.firstname.trim()) {
        errors.firstname ="First name required "        
    }

    if(!values.lastname.trim()) {
        errors.lastname="Last name required "        
    }

    if(!values.username.trim()) {
        errors.username ="Username required "        
    }else if(values.username.length<6){
        errors.username='Username needs to be 6 characters or more'        
    }

    //Email
    if(!values.email){
        errors.email="Email required"        
    }  
   else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
    {
        errors.email="Email address is invalid"        
    }

    if(!values.password.trim())
    {
        errors.password ='Password is required'        
    }
    else if(values.password.length<6){
        errors.password='Password needs to be 6 characters or more'        
    }
    if(!values.password2.trim())
    {
        errors.password2='Password is required'
    }

   else if(values.password2!==values.password)
    {
        errors.password2='Password do not match'
        
    }
    return errors
}