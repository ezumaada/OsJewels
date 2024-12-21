import React from "react";
import { useCart } from "../../cartcontext/CartContext";
import { saveCart } from "../../services/saveCart"; // Import the saveCart function
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  // Calculate total items
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  console.log("Cart contents:", cart);

  // Handle saving the cart
  const handleSaveCart = async () => {
    const cartData = {
      items: cart,
      totalPrice,
      totalItems,
      createdAt: new Date().toISOString(),
    };

    try {
      await saveCart(cartData);
      alert("Cart saved successfully!");
    } catch (error) {
      console.error("Error saving cart:", error.message);
      alert("Failed to save cart. Please try again.");
    }
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id, change) => {
    // Ensure quantity does not go below 1 when decreasing
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, change } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <div className="text-lg">
          <span className="font-medium">{totalItems}</span> items
        </div>
      </div>

      {cart.length > 0 ? (
        <div>
          {/* Cart Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="text-sm">
                        Quantity:
                      </label>

                      {/* Quantity Change Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}
                          className="bg-gray-300 text-black px-3 py-1 rounded"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                           onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}
                          className="bg-gray-300 text-black px-3 py-1 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total and Actions */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-4">
              Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </h2>

            <div className="flex gap-4">
              <Link
                to="/products"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800"
              >
                Clear Cart
              </button>
              <button
                onClick={handleSaveCart}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800"
              >
                Save Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
