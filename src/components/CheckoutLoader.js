import { toast } from "react-toastify"
import { redirect } from "react-router-dom"
export const checkoutLoader = (store)=>()=>{
    const user = store.getState().userReduce.user;
    if (!user || !user.username || user.username == '') {
      toast.warning("Please login",{ autoClose: 3000 });
      return redirect("/login");
    }
   return null;
  }