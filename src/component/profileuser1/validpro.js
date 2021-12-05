export default function validateInfo(values) {
    let errors={}
    
    if(!values.fnameinput) {
        errors.fnameinput ="First name required "        
    }

    if(!values.lnameinput.trim()) {
        errors.lnameinput="Last name required "        
    }

    if(!values.usernameinput.trim()) {
        errors.usernameinput ="Username required "        
    }else if(values.usernameinput.length<6){
        errors.usernameinput='Username needs to be 6 characters or more'        
    }

    //Email
    if(!values.emailinput){
        errors.emailinput="Email required"        
    }  
   else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.emailinput))
    {
        errors.emailinput="Email address is invalid"        
    }
    return errors
}