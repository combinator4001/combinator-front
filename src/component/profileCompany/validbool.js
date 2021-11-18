export default function validateInfo(values) {   
    if(!values.Cnameinput) {
        
        return false
    }

    if(!values.usernameinput.trim()) {
        return false
        
    }else if(values.emailinput.length<6){
        
        return false
    }

    //Email
    if(!values.emailinput){
        return false
        
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.emailinput))
    {
        
        return false
    }
    return true
}