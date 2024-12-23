import React, { useState } from "react";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <p className="text-sm md:text-base">
          This website uses cookies to enhance your experience. By clicking
          Accept, you consent to the use of cookies.
        </p>
        <div className="flex items-center space-x-2">
          <button
            className="bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-4 py-2 rounded"
            onClick={handleClose}
          >
            Accept
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-sm md:text-base px-4 py-2 rounded"
            onClick={handleClose}
          >
            Reject
          </button>
        </div>
        <button
          className="absolute top-3 right-3 text-white text-lg hover:text-gray-400 md:static md:ml-4"
          onClick={handleClose}
        >
          &times;
        </button>
      </div>
    )
  );
};

export default CookieConsent;
