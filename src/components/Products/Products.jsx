import React, { useState } from 'react'
import productData from '../../data/productData'
import ProductCard from './ProductCard';

const categories = [
  "FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS",
];

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("FOOD & DRINKS");

    const filteredProducts = productData.filter(product => product.category === selectedCategory);
    
  return (
    <section className='bg-gray-50 pb-10 px-5 lg:px-14'>
      <h2 className='text-4xl font-bold text-center text-gray-800 mb-10 pt-5'>Our Products</h2>

      <div className='flex flex-wrap justify-center mb-6 space-x-4 text-sm font-medium text-green-600'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
            }}
            className={`mt-1.5 pb-1 border-b-2 ${selectedCategory === category ? 'border-green-600' : 'border-transparent'} hover:border-green-400 transition duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
            filteredProducts.map((product, index) => <ProductCard key={index} product={product}></ProductCard>)
        }
      </div>
    </section>
  );
}

export default Products