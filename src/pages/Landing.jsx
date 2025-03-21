import Hero from "../components/Hero"
import { customFetch } from "../utils/Api"
import FeaturedProducts from "../components/FeaturedProducts";
const url = '/products?featured=true';
export const loader = async()=>{
    const response = await customFetch(url);
    const products = response?.data?.data;
    return {products};
}
const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing
