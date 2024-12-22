import React from 'react';
import { Link } from 'react-router-dom';

const Weddings = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-6 md:p-12">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="/images/dering/FurrerJacotDiamondEngagementRings.png" // Replace with your image path
          alt="Wedding Moments"
          className="w-full h-[500px] rounded-lg shadow-md"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-start">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Celebrate Weddings and Special Moments
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Discover timeless elegance with our collection, perfect for weddings and life’s most cherished celebrations. From radiant diamonds to stunning designs, we help you commemorate your special moments in style.
        </p>
        <Link
          to="/diamonds"
          className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        >
          Explore Diamonds
        </Link>
      </div>
    </div>
  );
};

export default Weddings;
