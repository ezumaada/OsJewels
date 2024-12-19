// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // `null` when not authenticated
//   const { dispatch } = useCart();

//   const login = async (userData) => {
//     setUser(userData);

//     // Fetch saved cart from backend
//     const response = await fetch(`/api/cart?userId=${userData.id}`);
//     const savedCart = await response.json();

//     // Dispatch saved cart to the cart context
//     dispatch({ type: "LOAD_CART", payload: savedCart });
//   };
  
//   const logout = () => {
//     setUser(null);
//     dispatch({ type: "CLEAR_CART" }); // Clear cart on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
