import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import { useNavigation } from "react-router-dom"
import Loader from "../components/Loader"
const HomeLayout = () => {
    const navigation = useNavigation();
    const loading = navigation.state=='loading';
  return (
    <>
      <Header/>
      <NavBar/>
      {loading?<Loader/>:
      <section className='align-element py-20'>
          <Outlet />
        </section>
}
    </>
  )
}

export default HomeLayout
