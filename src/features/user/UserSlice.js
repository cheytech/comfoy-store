import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
 const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };
  
const initialState = {
    theme:'dracula',
    user:getUserFromLocalStorage
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
     loginUser:(state,action)=>{
        const user = {...action.payload.user,token:action.payload.jwt}
        state.user = user
        localStorage.setItem('user',JSON.stringify(user))
        // state.user.username = action.payload.user.username;
        // return state;
     },
     logoutUser:(state)=>{
       state.user = null;
       localStorage.removeItem('user');
       toast.success('Logged out successfully')
     },
     toggleTheme:(state)=>{
        console.log('theme');
     }
    }
})
export const{loginUser,logoutUser,toggleTheme} = userSlice.actions;
export default userSlice.reducer;