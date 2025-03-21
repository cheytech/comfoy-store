import { useLoaderData,Link } from "react-router-dom"
import { customFetch } from "../utils/Api"
import { useState } from "react";
import { FormatPrice } from "../utils/Api";
import { generateAmountOptions } from "../utils/Api";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/CartSlice";
export const loader = async({params})=>{
const response = await customFetch(`/products/${params.id}`);
return {product:response?.data?.data}
}
const SingleProduct = () => {
    const{product} = useLoaderData();
    const{image,title,company,description,colors,price} = product.attributes
    const[productcolor,setProductColor] = useState(colors[0])
    const dollarsAmount = FormatPrice(price);
    const[amount,setAmount] = useState(1);
    const handleAmount = (e)=>{
        setAmount(parseInt(e.target.value));
    }
  const cartProduct = {
    cartID:product.id + productcolor,
    productID:product.id,
    image,
    title,
    price,
    company,
    productcolor,
    amount
  }
    const dispatch = useDispatch();
    const addToCart = ()=>{
      dispatch(addItem({product:cartProduct}))
    }
  return (
    <section>
      <div className='text-md breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{title}</h1>
          <h4 className='text-xl text-neutral-content font-bold mt-2'>
            {company}
          </h4>
          <p className='mt-3 text-xl'>{dollarsAmount}</p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS */}
          <div className='mt-6'>
            <h4 className='text-md font-medium tracking-wider capitalize'>
              colors
            </h4>
          <div className="mt-2">
            {colors.map((color)=>{
                return (
                    <button key={color} type="button" className={`badge w-6 h-6 mr-2 ${color === productcolor && 'border-2 border-secondary'}`} onClick={()=>setProductColor(color)} style={{backgroundColor:color}}>
                    </button>
                )
            })}
          </div>
          </div>
          {/* AMOUNT */}
          <div className='form-control w-full max-w-xs'>
            <label className='label' htmlFor='amount'>
              <h4 className='text-md font-medium -tracking-wider capitalize'>
                amount
              </h4>
            </label>
            <select
              className='select select-secondary select-bordered select-md'
              id='amount'
              onChange={handleAmount}
              value={amount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          {/* CART BTN */}
          <div className='mt-10'>
            <button className='btn btn-secondary btn-md' onClick={addToCart}>
              Add to bag
            </button>
          </div>
         </div>
         </div>
     </section>
  )
}

export default SingleProduct
