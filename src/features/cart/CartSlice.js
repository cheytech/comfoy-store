import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const defaultState = {
    cartItems:[],
    numItemsInCart:0,
    cartTotal:0,
    shipping:500,
    tax:0,
    orderTotal:0
};
const getDataFromStorage = ()=>{
    return JSON.parse(localStorage.getItem('cart')) || defaultState
}
const CartSlice = createSlice({
name:'cart',
initialState:getDataFromStorage,
reducers:{
addItem:(state,action)=>{
    console.log(state);
    const{product} = action.payload;
    const item = state.cartItems.find((i)=>i.cartID === product.cartID);
    if(item){
        item.amount += product.amount;
    }else{
        state.cartItems.push(product);
    }
    state.numItemsInCart += product.amount;
    state.cartTotal += product.price * product.amount;
    CartSlice.caseReducers.calculateTotals(state);
},
clearCart:(state)=>{
    localStorage.setItem('cart',JSON.stringify(defaultState));
    return defaultState;
},
removeItem:(state,action)=>{
    const{cartID} = action.payload;
    const product = state.cartItems.find((i)=>i.cartID === cartID);
    state.cartItems = state.cartItems.filter((i)=>i.cartID != cartID);
    state.numItemsInCart -= product.amount;
    state.cartTotal -= product.price * product.amount;
    CartSlice.caseReducers.calculateTotals(state);
    toast.error('Item removed from cart');
},
editItem:(state,action)=>{
    const{cartID,amount} = action.payload;
    const item = state.cartItems.find((i)=>i.cartID == cartID);
    state.numItemsInCart += amount - item.amount;
    state.cartTotal += item.price * (amount - item.amount);
    item.amount = amount;
    CartSlice.caseReducers.calculateTotals(state);
    toast.success('Cart updated');
},
calculateTotals:(state)=>{
    state.tax = 0.1 * state.cartTotal;
    state.orderTotal = state.cartTotal + state.shipping + state.tax;
    localStorage.setItem('cart',JSON.stringify(state));
    toast.success('Item added successfully');
}
}
})
export const{clearCart,removeItem,editItem,addItem} = CartSlice.actions
export default CartSlice.reducer;
