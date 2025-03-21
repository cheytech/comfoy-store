import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils/Api";

export const loader = (store)=>async({request})=>{
const user = store.getState().userReduce.user;
if(!user){
    toast.warn('Please login to view orders');
    return redirect('/login');
}
const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
try {
    const response = await customFetch.get('/orders',{
        params,
        headers:{
            Authorization:`Bearer ${user.token}`
        }
    })
    return {orders:response.data.data,meta:response.data.meta}
} catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message,{ autoClose: 3000 });
    return null;
}

}
const OrdersList = () => {
  return (
    <h1 className="text-4xl">Orders</h1>
  )
}

export default OrdersList
