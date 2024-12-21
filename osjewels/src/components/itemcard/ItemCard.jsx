import React, { useState } from "react";
import { useCart } from "../../cartcontext/CartContext";

const ItemCard = ({ product = {} }) => {
  const { id, img, title, desc, newPrice, oldPrice, onSale } = product;
  const { dispatch } = useCart();

  // State for toggling image size
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);

  // Handle toggling image size
  const toggleImageSize = () => {
    setIsImageEnlarged((prev) => !prev);
  };

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    const itemToAdd = {
      id,
      img,
      title,
      desc,
      price: onSale ? newPrice : oldPrice, // Use newPrice if onSale
      newPrice: onSale ? newPrice : oldPrice, // Ensure newPrice is always included
      onSale,
    };
    console.log("Add to Cart clicked!", product);
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
    <div className="border max-h-[450px] rounded-lg shadow hover:shadow-lg transition-shadow duration-300 relative">
      {/* Image Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-10 bg-white bg-opacity-90 flex justify-center items-center transition-opacity duration-300 ${
          isImageEnlarged ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleImageSize}
      >
        <img
          src={img}
          alt={title}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      {/* Product Image */}
      <div
        className="relative overflow-hidden rounded-lg cursor-pointer"
        onClick={toggleImageSize}
      >
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-48"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
        <div className="flex gap-2 justify-between items-center mt-4">
          <span className="text-lg font-bold text-gray-800">
            ${onSale ? newPrice : oldPrice}
            {onSale && (
              <span className="line-through ml-2 text-gray-500">
                ${oldPrice}
              </span>
            )}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-black text-white rounded hover:bg-blue-700 focus:outline-none transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
