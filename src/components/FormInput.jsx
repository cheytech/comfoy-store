const FormInput = ({label,name,type,defaultvalue,pattern}) => {
  return (
    <>
      <div className='form-control'>
      <label htmlFor={name} className='label'>
        <span className='label-text capitalize'>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultvalue}
        pattern={pattern}
        
        className={`input input-bordered`}
      />
    </div>
    </>
  )
}

export default FormInput
