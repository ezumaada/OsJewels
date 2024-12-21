import React, { useState } from 'react';
import ItemCard from '../../components/itemcard/ItemCard'; // Import your ItemCard component

import { Link } from 'react-router-dom';
import productData from '../../data/productData';
import Toast from '../../components/toast/Toast';

const Sales = () => {
    const [toastMessage, setToastMessage] = useState(null);

  // Filter the products where onSale is true
  const onSaleProducts = productData.filter(product => product.onSale === true);

  const handleAddToCart = (product) => {
    // Handle adding the product to cart
    // Use your dispatch method here
    setToastMessage(`${product.title} added to cart!`);
  };
  return (
    <div className="p-6">
      
     
      <h2 className="text-2xl font-bold my-8">On Sale</h2>
      <p className="text-gray-600 mb-6">Here are the products currently on sale.</p>

      {/* Toast Notification */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Render each product using ItemCard */}
        {onSaleProducts.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            addItemToCart={() => handleAddToCart(product)} // Pass the product to handleAddToCart
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link to="/products">
        <button className="bg-black text-white px-6 py-2 rounded">
          View All Products
        </button></Link>

      </div>
    </div>
  )
}

export default Sales