

export default function validateInfo(name,lastname,username,email) {
    let errors={}
    
    if(!name.trim()) {
        errors.name ="First name required "        
    }

    if(!lastname.trim()) {
        errors.lastname="Last name required "        
    }

    if(!username.trim()) {
        errors.username ="Username required "        
    }else if(username.length<6){
        errors.username='Username needs to be 6 characters or more'        
    }

    //Email
    if(!email){
        errors.email="Email required"        
    }  
   else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email))
    {
        errors.email="Email address is invalid"        
    }
    return errors
}
