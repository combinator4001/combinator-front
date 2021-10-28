const counterReducer = (state=0,action) => {
    switch(action.type){
        case "Login" :
            return state+1;
        case "signUp":
            return state-1;
        case "changePass":
            return state+2;
        default:
            return state;
    }
}
export default counterReducer;