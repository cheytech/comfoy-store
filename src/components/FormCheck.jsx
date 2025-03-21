

const FormCheck = ({label,name,defaultvalue,size}) => {
  return (
    <div className="form-control">
        <label htmlFor={name} className="label cursor-pointer">
            <span className='label-text capitalize'>{label}</span>
        </label>
      <input type="checkbox" checked={defaultvalue} className={`checkbox checkbox-primary ${size}`}/>
    </div>
  )
}

export default FormCheck
