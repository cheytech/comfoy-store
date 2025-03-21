import { useSelector } from "react-redux"
import CartItemsList from "../components/CartItemsList"
import CartTotal from "../components/CartTotal"
import SectionTitle from "../components/SectionTitle"
import { Link } from "react-router-dom"
const Cart = () => {
  const numItemsInCart = useSelector((state)=>state.stateReducer.numItemsInCart)
  const user = useSelector((state)=>state.userReduce.user);
  if(numItemsInCart === 0){
    return <SectionTitle text='Your cart is empty'/>;
  }
  return (
    <>
      <SectionTitle text='Shopping Cart'/>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
         <CartItemsList/>
        </div>
        <div className="lg:col-span-4 lg:pl-4">
         <CartTotal/>
         {user?(<Link to='/checkout' className="btn btn-primary btn-block mt-8">Proceed to checkout</Link>):(<Link to='/login' className="btn btn-primary btn-block mt-8">Please login</Link>)}
        </div>
      </div>
    </>
  )
}

export default Cart
