import React from "react";
import { Link } from "react-router-dom";

const Cert = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Gift Certificate Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Receive a <span className="text-red-600">GIFT CERTIFICATE</span> with Your Watch Purchase
          </h2>
          <p className="text-gray-600 mb-4">Redeem on Jewellery by <strong>31/01/25</strong></p>
          <p className="text-gray-500">
            Your gift certificate will be delivered to your registered address within <strong>24 hours</strong>.
          </p>
        </div>

        {/* Holiday Season Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Image */}
          <img
            src="/images/GWP2024BlueSM_480x500.jpg"
            alt="Holiday Season Watches"
            className="rounded-lg shadow-md w-full"
          />
          {/* Right Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">🎁 Holiday Season Offer</h3>
            <p className="text-gray-600 mb-4">
              Buy a watch and receive <strong>20% of the watch purchase price</strong> toward a piece of jewelry.
            </p>
            <p className="text-gray-500">
              Gift with purchase may apply to any single piece of jewelry with a retail value of $1000. You will receive
              your personalized discount code via email after purchasing a watch via our online stores.
            </p>
            <div className="flex justify-center mt-6">
        <Link to="/watches">
        <button className="bg-black text-white px-6 py-2 rounded">
          Shop Now 
        </button></Link>

      </div>
          </div>
        </div>

        {/* Hot Holiday Watches Section */}
        <div className="bg-white shadow-md rounded-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">🔥 Hot Holiday Watches</h3>
            <p className="text-gray-600 mb-4">
              Check out the hottest watches this holiday season from our amazing collections.
            </p>
            <p className="text-gray-500 mb-6">
              Buy a watch and receive <strong>20% of the watch purchase price</strong> toward a piece of jewelry.
              Gift with purchase may apply to any single piece of jewelry with a retail value of $1000. You will receive
              your personalized discount code via email after purchasing a watch via our online stores.
            </p>
            <Link
              to="/bens"
              className="bg-black items-center  text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition-colors"
            >
              Bell Ross Watches
            </Link>
          </div>
          {/* Right Image */}
          <img
            src="/images/HolidayWatches.jpg"
            alt="Hot Holiday Watches"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cert;
