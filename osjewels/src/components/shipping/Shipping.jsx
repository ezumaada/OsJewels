import React from "react";

const Shipping = () => {
  return (
    <div className="bg-black pl-8 mx-[5vw]: text-white flex flex-col md:flex-row justify-between gap-4  py-8">
      {/* Free Shipping */}
      <div className="flex-1 border-solid border-r-2 border-gray-600 flex flex-col items-center text-center md:text-left md:items-start px-4">
        <img
          src="/images/watches/delivery.svg"
          alt="delivery-icon"
          className="w-12  h-12 mb-4"
        />
        <h1 className="text-lg font-bold mb-2">Free Shipping</h1>
        <p className="text-gray-300">On Orders Above $500</p>
      </div>

      {/* Authorized Retailer */}
      <div className="flex-1 border-solid border-r-2 border-gray-600 flex flex-col items-center text-center md:text-left md:items-start px-4">
        <img
          src="/images/watches/tag.svg"
          alt="tag-icon"
          className="w-12 h-12 mb-4"
        />
        <h1 className="text-lg font-bold mb-2">Authorized Retailer</h1>
        <p className="text-gray-300">Shop with Confidence</p>
      </div>

      {/* Give Us a Call */}
      <div className="flex-1 border-solid border-r-2 border-gray-600 flex flex-col items-center text-center md:text-left md:items-start px-4">
        <img
          src="/images/watches/phone.svg"
          alt="phone-icon"
          className="w-12 h-12 mb-4"
        />
        <h1 className="text-lg font-bold mb-2">Give Us a Call</h1>
        <p className="text-gray-300">+1 (234) 9834 44</p>
      </div>

      {/* Store Location */}
      <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start px-4">
        <img
          src="/images/watches/house.svg"
          alt="store-icon"
          className="w-12 h-12 mb-4"
        />
        <h1 className="text-lg font-bold mb-2">Store Location</h1>
        <p className="text-gray-300">251 Denver, Colorado</p>
      </div>
    </div>
  );
};

export default Shipping;
