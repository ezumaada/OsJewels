import React, { useState } from 'react';
import ItemCard from '../../components/itemcard/ItemCard';
import { useCart } from '../../cartcontext/CartContext';
import Toast from '../../components/toast/Toast';
import productData from '../../data/productData';

const Products = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    const itemToAdd = {
      id: product.id,
      img: product.img,
      title: product.title,
      desc: product.desc,
      price: product.onSale ? product.newPrice : product.oldPrice,
      onSale: product.onSale,
    };

    // Dispatch action to add to cart
    dispatch({ type: 'ADD_TO_CART', payload: itemToAdd });

   

   
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold my-8">Products Page</h2>
      <p className="text-gray-600 mb-6">Here are the products available in our store.</p>

      

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productData.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            addItemToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
