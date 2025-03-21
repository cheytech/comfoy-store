import { FormatPrice } from "../utils/Api"
import { useSelector } from "react-redux"
const CartTotal = () => {
    const{CartTotal,shipping,tax,orderTotal} = useSelector((state)=>state.stateReducer)
    
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>
             SubTotal
            </span>
            <span>
             {FormatPrice(parseInt(CartTotal))}
            </span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>
             Shipping
            </span>
            <span>
             {FormatPrice(shipping)}
            </span>
        </p>
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>
             Tax
            </span>
            <span>
             {FormatPrice(tax)}
            </span>
        </p>
        <p className="flex justify-between text-sm mt-4 border-b border-base-300 pb-2">
            <span>
             Order Total
            </span>
            <span>
             {FormatPrice(orderTotal)}
            </span>
        </p>
      </div>
    </div>
  )
}

export default CartTotal
