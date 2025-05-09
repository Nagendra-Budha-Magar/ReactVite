import React from 'react';
import ProductCard from './ProductCard';
import { productData } from '../utils/productData';
const Body = () => {
  return (

    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-3'>
        <input

          type='text'

          className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'

          placeholder='Search...'

        />
        <button className='px-4 py-2 bg-blue-500 text-white cursor-pointer rounded-lg hover:bg-blue-600'>
          Search
        </button>
      </div>

      <div className='flex flex-wrap justify-center gap-4 product-items'>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

    </section>
  );
}

export default Body;