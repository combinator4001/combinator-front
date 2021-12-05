//import handle from "./Profileuser";

export default function validateInfo(name,lastname,username,email) {    
    if(!name.trim()) {
        
        return false
    }

    if(!lastname.trim()) {
        
        return false
    }

    if(!username.trim()) {
        return false
        
    }else if(username.length<6){
        
        return false
    }

    //Email
    if(!email){
        return false
        
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email))
    {
        
        return false
    }
    return true
}