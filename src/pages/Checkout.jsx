import { useSelector } from "react-redux"
import CheckoutForm from "../components/CheckoutForm"
import CartTotal from "../components/CartTotal"
import SectionTitle from "../components/SectionTitle"
const Checkout = () => {
  const cartTotal = useSelector((state)=>state.stateReducer.cartTotal);
  if(cartTotal === 0){
   return <SectionTitle text='Your cart is empty'/>
  }
  return (
    <>
      <SectionTitle text='Place your order'/>
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
       <CheckoutForm/>
       <CartTotal/>
      </div>
    </>
  )
}

export default Checkout
