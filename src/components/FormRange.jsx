import { FormatPrice } from "../utils/Api"
import { useState } from "react"
const maxprice = 10000
const step = 1000
const FormRange = ({label,name,size,price}) => {
    const[range,setRange] = useState(price || maxprice);
  return (
    <div className="form-control">
      <label htmlFor={name} className='label cursor-pointer'>
        <span className='label-text capitalize'>{label}</span>
        <span>{FormatPrice(range)}</span>
      </label>
      <input type='range' name={name} min={0} max={maxprice} step={step} value={range} onChange={(e)=>setRange(e.target.value)} className={`range range-primary ${size}`}/>
      <div className='w-full flex justify-between text-xs px-2 mt-2'>
        <span className='font-bold text-md'>0</span>
        <span className='font-bold text-md'>Max:{FormatPrice(maxprice)}</span>
      </div>
    </div>
  )
}

export default FormRange
