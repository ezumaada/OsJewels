import React from "react";
import { useCart } from "../../cartcontext/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  );

  // Calculate total items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
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
                    <p className="text-gray-600">${item.newPrice}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="text-sm">
                        Quantity:
                      </label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                        className="w-12 border rounded px-2 text-center"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-800"
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
              <a
                href="/products"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Continue Shopping
              </a>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <a
            href="/products"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Continue Shopping
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;