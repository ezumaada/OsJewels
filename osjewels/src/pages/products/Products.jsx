import React, { useState } from 'react';
import ItemCard from '../../components/itemcard/ItemCard'; // Import your ItemCard component
import Navbar from '../../components/navbar/Navbar';
import TopBanner from '../../components/topbanner/TopBanner';
import { useCart } from '../../cartcontext/CartContext';
import Toast from '../../components/toast/Toast';
import productData from '../../data/productData';

const Products = () => {
  
  const [toastMessage, setToastMessage] = useState(null);
  const { dispatch } = useCart();
  
// Example product data
  

   // Handle Add to Cart action
   const handleAddToCart = (product) => {
    const itemToAdd = {
      id: product.id,
      img: product.img,
      title: product.title,
      desc: product.desc,
      price: product.onSale ? product.newPrice : product.oldPrice,
      onSale: product.onSale,
    };
    // Dispatch the ADD_TO_CART action
    dispatch({ type: 'ADD_TO_CART', payload: itemToAdd });

    // Show success toast message
    setToastMessage(`${product.title} added to the cart!`);
    
    // Automatically close the toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  


  return (
    <div className="p-6">
       
      <h2 className="text-2xl font-bold my-8">Products Page</h2>
      <p className="text-gray-600 mb-6">Here are the products available in our store.</p>
      
       {/* Toast Notification */}
       {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Render each product using ItemCard */}
        {productData.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            addItemToCart={() => handleAddToCart(product)} // Pass the product to handleAddToCart
          />
        ))}
      </div>

      
    </div>
  );
};


export default Products;
