import { Link,useLoaderData } from "react-router-dom"
import { FormatPrice } from "../utils/Api";
const ProductsGrid = () => {
    const {products} = useLoaderData();
    
  return (
    <div className="grid gap-4 pt-12 lg:grid-cols-3 md:grid-cols-2">
 {products.map((product)=>{
       const{title,image,price} = product.attributes;
       const dollarprice = FormatPrice(price);
     return (
        <Link
        key={product.id}
        to={`/products/${product.id}`}
        className='card w-full shadow-xl hover:shadow-2xl transition duration-300'
      >
        <figure className='px-4 pt-4'>
          <img
            src={image}
            alt={title}
            className='rounded-xl h-64 md:h-48 w-full object-cover'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title capitalize tracking-wider'>{title}</h2>
          <span className='text-secondary'>{dollarprice}</span>
        </div>
      </Link>
       )
    })}
    </div>
   
  )
}

export default ProductsGrid
