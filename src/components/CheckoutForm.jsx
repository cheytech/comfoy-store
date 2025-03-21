import { Form } from "react-router-dom"
import FormInput from "./FormInput"
import SubmitBtn from "./SubmitBtn"
import { customFetch, FormatPrice } from "../utils/Api";
import { clearCart } from "../features/cart/CartSlice";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
export const action = (store)=>async({request})=>{
console.log(store);
const user = store.getState().userReduce.user;
const{cartItems,orderTotal,numItemsInCart} = store.getState().stateReducer;
const formData = await request.formData();
const{name,address} = Object.fromEntries(formData);
const info = {
    name,
    address,
    chargeTotal:orderTotal,
    orderTotal:FormatPrice(orderTotal),
    cartItems,
    numItemsInCart
};
try {
    //for restricted routes use headers
    const response = await customFetch.post('/orders',{data:info},{
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    });
    store.dispatch(clearCart());
    toast.success('Order placed successfully',{ autoClose: 3000 });
    return redirect('/orders');
} catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message,{ autoClose: 3000 });
    return null;
}

}
const CheckoutForm = () => {
  return (
   <Form method="POST" className="flex flex-col gap-y-4">
     <h4 className="font-medium text-xl capitalize ">Shipping Information</h4>
     <FormInput label='first name' name='name' type='text'/>
     <FormInput label='address' name='address' type='text'/>
     <div className="mt-4">
       <SubmitBtn text='place your order'/>
     </div>
   </Form>
  )
}

export default CheckoutForm
