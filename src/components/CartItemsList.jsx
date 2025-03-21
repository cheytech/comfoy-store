import CartItem from "./CartItem"
import { useSelector } from "react-redux"
const CartItemsList = () => {
    const cartItems = useSelector((state)=>state.stateReducer.cartItems);
  return (
    <>
     {cartItems.map((item)=>{
        return <CartItem key={item.cartID} cartitem={item}/>
     })} 
    </>
  )
}

export default CartItemsList
