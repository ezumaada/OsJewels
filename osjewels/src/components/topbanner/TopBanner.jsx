import React, { useState, useEffect } from 'react';


function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false); // New state for animation

  // Function to hide the banner with a sliding animation
  const handleClose = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300); // Duration of the slide-out animation (300ms)
  };

  return (
    isVisible && (
      <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#816339] text-md text-white p-4 flex items-center justify-center transition-transform transform ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{ transitionDuration: '300ms' }}
    >
        <div className="flex-grow text-center">
          <h2>Annual Gift with Watch Purchase</h2>
        </div>
        
      </div>
    )
  );
}

export default TopBanner;
