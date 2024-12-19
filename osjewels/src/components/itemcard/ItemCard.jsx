import React from 'react';
import { useCart } from "../../cartcontext/CartContext"; // Importing the Cart Context

const ItemCard = ({ product = {} }) => {
  // Destructure product properties
  const { id, img, title, desc, newPrice, oldPrice, onSale } = product;

  // Access the dispatch function from the Cart Context
  const { dispatch } = useCart();

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    const itemToAdd = {
      id, // Unique product identifier
      img, // Image URL
      category,
      title, // Product title
      desc, // Optional description
      price: onSale ? newPrice : oldPrice, // Use the sale price if the product is on sale
      onSale, // Boolean flag for on-sale status
    };

    // Dispatch the ADD_TO_CART action
    dispatch({ type: "ADD_TO_CART", payload: itemToAdd });
  };

  // Fallback UI if product data is missing
  if (!product || !id) {
    return (
      <div className="p-4 border rounded-lg">
        <p className="text-gray-500">Product information is missing</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg  shadow hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className='p-4'>
      {/* Product Title */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Product Description */}
      <p className="text-gray-500 text-sm">{desc}</p>

      {/* Pricing and Action */}
      <div className="flex justify-between items-center mt-4">
        {/* Price Section */}
        <span className="text-lg font-bold text-gray-800">
          ${onSale ? newPrice : oldPrice}
          {onSale && (
            <span className="line-through ml-2 text-gray-500">${oldPrice}</span>
          )}
        </span>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Add to Cart
        </button>
      </div>
      

      </div>
    </div>
  );
};

export default ItemCard;
