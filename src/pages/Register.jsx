import FormInput from "../components/FormInput"
import SubmitBtn from "../components/SubmitBtn"
import { Form,Link, redirect } from "react-router-dom"
import { customFetch } from "../utils/Api";
import { toast } from "react-toastify";
export const registerAction = async({request})=>{
  console.log(request);
const formData = await request.formData();
const data = Object.fromEntries(formData);
console.log(data);

try {
  console.log("Sending data to API:", data); // Debugging
  const response = await customFetch.post('/auth/local/register', data);
  toast.success('Account created successfully',{ autoClose: 3000 });
  return redirect('/login'); // Make sure to `return` the redirect
} catch (error) {
  console.error("Error response:", error?.response?.data); // Log server response
  const errorMessage = error?.response?.data?.error?.message || 'Please check your credentials';
  toast.error(errorMessage,{ autoClose: 3000 });
  return null;
}

}
const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
    <Form
      method='POST'
      className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
    >
      <h4 className='text-center text-3xl font-bold'>Register</h4>
      <FormInput type='text' label='username' name='username' />
      <FormInput type='email' label='email' name='email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"/>
      <FormInput type='password' label='password' name='password' />
      <div className='mt-4'>
        <SubmitBtn text='register' />
      </div>
      <p className='text-center'>
        Already a member?
        <Link
          to='/login'
          className='ml-2 link link-hover link-primary capitalize'
        >
          login
        </Link>
      </p>
    </Form>
  </section>
  )
}

export default Register
