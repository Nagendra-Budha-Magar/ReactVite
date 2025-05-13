import React from 'react';
import ProductCard from './ProductCard';
import { productData } from '../utils/productData';
const Body = () => {
  let topRatedProducts = [];
  const topRatedProductsData = () => { 
    productData.filter((product) => product.rating.rate>4);
    console.log(topRatedProducts);
  };
  return (
    <section className='flex flex-col gap-4 px-2 py-2 '>
      <div className='flex gap-10 items-center'>
      <div className='flex items-center gap-2'>
        <input
          type='text'
          className='w-80 px-4 py-2 pr-10 text-sm text-gray-700 bg-white border border-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400'
          placeholder='Search...'
        />
          Search
          </div>
          <button className='px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick = {topRatedProductsData}>
            Top Rated Products
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