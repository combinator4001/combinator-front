import handle from "./FormSignupCompany";

export default function validateInfo(values) {    
    if(!values.namecompany.trim()) {
        
        return false
    }

    if(!values.nameowner.trim()) {
        
        return false
    }

    if(!values.username.trim()) {
        return false
        
    }

    //Email
    if(!values.email){
        return false
        
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
    {
        
        return false
    }

    if(!values.password)
    {
       return false
        
    }else if(values.password.length<6){
        
        return false
    }

    if(!values.password2)
    {
      return false  
        
    }else if(values.password2!==values.password)
    {        
        return false
    }
    return true
}