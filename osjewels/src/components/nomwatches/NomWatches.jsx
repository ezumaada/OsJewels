import React from 'react';
import { Link } from "react-router-dom";

const NomWatches = () => {
  return (
    <div>
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
              to="/nomos"
              className="bg-black items-center  text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transition-colors"
            >
              Nomos  Watches
            </Link>
          </div>
          {/* Right Image */}
          <img
            src="/images/NOMOS_Club_Sport_Neomatik_34_Rose.png"
            alt="Nomos Holiday Watches"
            className="rounded-lg h-[500px] shadow-md w-full"
          />
        </div>
    </div>
  )
}

export default NomWatches