import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../src/features/cart/CartSlice';
import userReducer from '../src/features/user/UserSlice'
export const Store = configureStore({
    reducer:{
        stateReducer:cartReducer,
        userReduce:userReducer
    }
})
