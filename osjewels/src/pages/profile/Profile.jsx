import React, { useContext } from "react";
import { signOut } from '../services/authservice'

import { useNavigate } from "react-router-dom"; // For navigation to Cart page

const Profile = () => {
  
  const navigate = useNavigate();

  // Handle sign-out
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("Successfully logged out!");
      navigate("/signin");
    } catch (error) {
      console.error("Error logging out:", error);
      
    }
  };

  // Navigate to Cart
  const goToCart = () => {
    navigate("/cart"); // Assuming your Cart page is at "/cart"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-8">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome, {user.name}!
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Your email: <span className="font-semibold">{user.email}</span>
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          {/* Go to Cart button */}
          <button
            onClick={goToCart}
            className="w-1/2 py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Go to Cart
          </button>
        </div>

        <div className="flex justify-center space-x-4">
          {/* Logout button */}
          <button
            onClick={handleSignOut}
            className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
