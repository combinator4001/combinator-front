const isSignUp = (state=false,action) => {
    switch(action.type){
        case "SignUp" :
            return true;
        default:
            return state;

    }
}
export default isSignUp;