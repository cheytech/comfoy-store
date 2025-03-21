import { useNavigation } from "react-router-dom"

const SubmitBtn = ({text}) => {
    const navigate = useNavigation();
    console.log(navigate)
    const submitting = navigate.state === 'submitting'
  return (
    <>
      <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={submitting}
    >
      {submitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
    </>
  )
}

export default SubmitBtn
