// Filters.jsx
import { useLoaderData, Link, Form } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormRange from "./FormRange"
import FormCheck from "./FormCheck"

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, order, price, shipping} = params;

  return (
    <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput 
        type='search'
        label='search product'
        name='search'
        size='input-sm'
        defaultValue={search}
      />

      <FormSelect 
        label='select category'
        name='category'
        list={meta.categories}
        size='select-sm'
        defaultValue={category}
      />

      <FormSelect 
        label='select company'
        name='company'
        list={meta.companies}
        size='select-sm'
        defaultValue={company}
      />

      <FormSelect 
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        size='select-sm'
        defaultValue={order}
      />

      <FormRange 
        name='price' 
        label='select price' 
        price={price} 
        size='range-sm'
      />

      <FormCheck 
        name='shipping'
        label='free shipping'
        size='checkbox-sm'
        defaultChecked={!shipping}
      />

      <button type='submit' className='btn btn-primary btn-sm'>
        search
      </button>

      <Link to='/products' className='btn btn-accent btn-sm'>
        Reset
      </Link>
    </Form>
  )
}

export default Filters