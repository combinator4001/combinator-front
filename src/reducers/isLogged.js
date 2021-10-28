const isLoggedReducer = (state=false,action) => {
    switch(action.type){
        case "Login" :
            return true;
        default:
            return state;

    }
}
export default isLoggedReducer;