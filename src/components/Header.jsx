import { Link,useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { logoutUser } from "../features/user/UserSlice"
import { clearCart } from "../features/cart/CartSlice"
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.userReduce.user);
  const logout = ()=>{
    navigate('/');
    dispatch(logoutUser());
    dispatch(clearCart());
  }
  return (
    <header className='bg-neutral py-2 text-neutral-content'>
    <div className='align-element flex justify-center sm:justify-end'>
      {user && user.username? <div className="flex gap-x-2 sm:gap-x-8 items-center">
        <p className="text-xs sm:text-sm">Hello,{user.username}</p>
        <button className="btn btn-outline btn-primary" onClick={logout}>Logout</button>
      </div>: <div className='flex gap-x-6 justify-center items-center'>
          <Link to='/login' className='link link-hover text-xs sm:text-sm'>
            Sign in / Guest
          </Link>
          <Link to='/register' className='link link-hover text-xs sm:text-sm'>
            Create Account
          </Link>
        </div>}
       
    </div>
  </header>
  )
}

export default Header
