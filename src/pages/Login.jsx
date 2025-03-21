import FormInput from "../components/FormInput"
import SubmitBtn from "../components/SubmitBtn"
import { Form,Link, redirect } from "react-router-dom"
import { customFetch } from "../utils/Api";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/UserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
export const action = (store)=>async ({request})=>{
const formData = await request.formData();
const data = Object.fromEntries(formData);
try {
  const response = await customFetch.post('/auth/local',data);
  console.log(response.data);
  store.dispatch(loginUser(response.data));
  toast.success('Login successful',{ autoClose: 3000 });
  return redirect('/');
} catch (error) {
  console.error(error?.response?.data?.error);
toast.error(error?.response?.data?.error?.message || 'Please check credentials',{ autoClose: 3000 });
return null;
}
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHasGuestUser = async()=>{
    try {
      const response = await customFetch.post('/auth/local',{
        identifier:'test@test.com',
        password:'secret'
      });
     dispatch(loginUser(response.data));
     toast.success('Welcome guest user',{ autoClose: 3000 });
     navigate('/');
    } catch (error) {
      toast.error(error?.response?.message,{ autoClose: 3000 });
    }
  }
  return (
    <>
     <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <FormInput type='email' label='email' name='identifier' />
        <FormInput type='password' label='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='login' />
        </div>
        <button
          type='button'
          className='btn btn-secondary btn-block'
          onClick={loginHasGuestUser}
        >
          guest user
        </button>
        <p className='text-center'>
          Not a member yet?{' '}
          <Link
            to='/register'
            className='ml-2 link link-hover link-primary capitalize'
          >
            register
          </Link>
        </p>
      </Form>
    </section>
    </>
  )
}

export default Login
