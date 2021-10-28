import { createSlice} from '@reduxjs/toolkit'
//import { signUp } from '../actions';

export const userSlice = createSlice({
    name :"user",
    initialState : {
        user:null
    },
    reducers:{
        login :(state,action)=>{
            state.user=action.payload;
        },
        logout:(state) =>{
            state.user=null;
        },
        signUp:(state,action)=>{
            state.user=action.payload;
        }
    }
})

export const {login,logout,signUp}=userSlice.actions;
export const selectuser = (state) => state.user.user;
export default userSlice.reducer;
