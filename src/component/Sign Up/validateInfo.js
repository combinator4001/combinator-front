import handle from "./FormSignup";

export default function validateInfo(values) {
    let errors={}
    let condition = true;
    if(!values.firstname.trim()) {
        errors.firstname ="First name required "
        condition = false;
    }

    if(!values.lastname.trim()) {
        errors.lastname="Last name required "
        condition = false;
    }

    if(!values.username.trim()) {
        errors.username ="Username required "
        condition = false;
    }

    //Email
    if(!values.email.trim()){
        errors.email="Email required"
        condition = false;
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email))
    {
        errors.email="Email address is invalid"
        condition = false;
    }

    if(!values.password.trim())
    {
        errors.password ='Password is required'
        condition = false;
    }else if(values.password.length<6){
        errors.password='Password needs to be 6 characters or more'
        condition = false;
    }

    if(!values.password2.trim())
    {
        errors.password2='Password is required'
        condition = false;
    }else if(values.password2!==values.password)
    {
        errors.password2='Password do not match'
        condition = false;
    }

    return [errors,condition]
}