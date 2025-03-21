// Products.jsx
import ProductsContainer from "../components/ProductsContainer"
import PaginationContainer from "../components/PaginationContainer"
import Filters from "../components/Filters"
import { customFetch } from "../utils/Api"

const url = '/products'

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries(new URL(request.url).searchParams.entries());
    console.log(params);
    const response = await customFetch(url, { params });
    console.log(response);
    return {
      products: response?.data?.data,
      meta: response?.data?.meta,
      params
    }
  } catch (error) {
    console.error('Error loading products:', error);
    return {
      products: [],
      meta: {},
      params: {}
    }
  }
}

const Products = () => {
  return (
    <div className="space-y-8">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  )
}

export default Products