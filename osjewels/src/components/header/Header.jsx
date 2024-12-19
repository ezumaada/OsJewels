import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative h-[50vh] md:h-[70vh] w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/bigelephant.jpg')` }}>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Text and Button */}
      <div className="absolute right-8 bottom-4 py-4 text-white text-right space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Discover Luxury</h1>
        <p className="text-sm p-4 md:text-lg">Exclusive collections just for you</p>
        <Link
          to="/olelynggard"
          className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Explore Now
          
        </Link>
      </div>
    </div>
  );
};

export default Header;
