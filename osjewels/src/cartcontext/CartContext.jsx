import React, { createContext, useContext, useReducer } from "react";

// Step 1: Create a Context

// Define initial state
const initialState = {
  cart: [],
};

// Step 2: Define the Reducer to Handle State Changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find((item) => item.id === action.payload.id);
      if (existingItem) {
        // If item exists, increase its quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // Add new item with quantity = 1
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
      case 'SET_CART':
        return { ...state, cart: action.payload };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

const CartContext = createContext();

// Step 3: Create a Provider Component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState); // Initial cart is an empty array

  // Helper function to calculate total quantity
  const getTotalQuantity = () => {
    return state.cart.reduce((total, item) => total + item.quantity, 0); // Reference state.cart instead of cart
  };

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch, getTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Step 4: Custom Hook to Use the Cart Context
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
