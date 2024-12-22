import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { useCart } from "../../cartcontext/CartContext";
import { saveCart } from "../../services/saveCart";
import { Link, useNavigate } from "react-router-dom";

import { getAuth,  } from "firebase/auth"; // Added missing import
import { db } from "../../firebase";

const Cart = () => {
  const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();
  
  

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Check if the user is authenticated
    if (!user) {
      console.error("User is not authenticated");
      setIsAuthenticated(false);  // Optionally, set state to show that the user is not authenticated
    } else {
      setIsAuthenticated(true);  // If the user is authenticated, set the state accordingly
    }
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

 

const handleCheckout = async () => {
  if (!isAuthenticated) {
    // If user is not authenticated, navigate to signin
    navigate("/signin", { state: { from: "/cart" } });
    return;
  }

  setIsLoading(true); // Start loading
  try {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error("User is not authenticated.");
    }

    const cartData = {
      items: cart,
      totalPrice: totalPrice,
      totalItems: totalItems,
      createdAt: new Date().toISOString(),
      userId: user.uid, // Use currentUser.uid to save cart for authenticated user
      userEmail: user.email, // Include user email for identification
    };

    // Save cart to Firestore
    const savedCartId = await saveCart(cartData, user.uid);
    dispatch({ type: "CLEAR_CART" });

    // Redirect to the success page after successful checkout
    navigate("/", { state: { orderId: savedCartId } });
  } catch (error) {
    console.error("Error saving cart:", error);
    alert("Failed to complete the checkout. Please try again.");
  } finally {
    setIsLoading(false); // Stop loading regardless of the result
  }
};


  const handleQuantityChange = (id, action) => {
    dispatch({ type: action, payload: id });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
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
                    <p className="text-gray-600"> ${(isNaN(item.price) ? 0 : parseFloat(item.price)).toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="text-sm">
                        Quantity:
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, "DECREMENT_QUANTITY")}
                          className="bg-gray-300 text-black px-3 py-1 rounded disabled:opacity-50"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, "INCREMENT_QUANTITY")}
                          className="bg-gray-300 text-black px-3 py-1 rounded"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800 mt-2"
                    aria-label={`Remove ${item.title} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <h2 className="text-xl font-bold mb-4">
              Total: <span className="text-green-600">${totalPrice.toFixed(2)}</span>
            </h2>

            <div className="flex gap-4">
              <Link
                to="/products"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 transition-colors"
              >
                Clear Cart
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : isAuthenticated ? "Checkout" : "Sign in to Checkout"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
