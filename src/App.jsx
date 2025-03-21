import { Orders,Products,About,Cart,Landing,Error,Login,Register,SingleProduct,Checkout,HomeLayout } from './index'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { loader as LandingLoader } from './pages/Landing'
import { loader as singleproductloader } from './pages/SingleProduct'
import { loader as productsloader } from './pages/Products'
import { registerAction } from './pages/Register'
import { checkoutLoader } from './components/CheckoutLoader'
import { Store } from './Store'
import { action as loginAction } from './pages/Login'
import { action as checkoutForm } from './components/CheckoutForm'
import { loader as ordersListLoader } from './components/OrdersList'
const route = createBrowserRouter([
  {
path:'/',
element:<HomeLayout/>,
errorElement:<Error/>,
children:[
  {
    path:'about',
    element:<About/>,
    errorElement:<Error />
  },
  {
    path:'products',
    element:<Products/>,
    errorElement:<Error />,
    loader:productsloader
  },
  {
    path:'products/:id',
    element:<SingleProduct/>,
    errorElement:<Error />,
    loader:singleproductloader
  },
  {
    path:'cart',
    element:<Cart/>,
    errorElement:<Error />
  },
  {
    path:'orders',
    element:<Orders/>,
    errorElement:<Error />,
    loader:ordersListLoader(Store)
  },
  {
    index:true,
    element:<Landing/>,
    errorElement:<Error />,
    loader:LandingLoader
  },
  {
    path:'checkout',
    element:<Checkout/>,
    errorElement:<Error />,
    loader:checkoutLoader(Store),
    action:checkoutForm(Store)
  }
]
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error />,
    action:loginAction(Store)
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error />,
    action:registerAction
  }
])
function App() {

  return (
   <RouterProvider router={route} />
  )
}

export default App
