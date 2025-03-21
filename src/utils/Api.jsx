import axios from 'axios'
const productionUrl = ' https://strapi-store-server.onrender.com/api';
export const customFetch = axios.create({
baseURL:productionUrl
})
export const FormatPrice = (price)=>{
   const dollarprice = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
   }).format((price/100).toFixed(2));
   return dollarprice;
}
export const generateAmountOptions = (number)=>{
return Array.from({length:number},(_,index)=>{
    const amount = index+1;
   return (
    <option value={amount} key={amount} >
    {amount}
    </option>
   )
})
}