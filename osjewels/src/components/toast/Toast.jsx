import React, { useEffect } from 'react';

const Toast = ({ title, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`
      fixed top-5 left-1/2 transform -translate-x-1/2 
      bg-slate-300 text-black p-4 rounded-lg shadow-lg z-50
      animate-[fade-in_0.3s_ease-in-out]
      min-w-[200px]
    `}>
      <p className="text-center font-medium">
        Added to Cart:
        <span className="block mt-1 font-normal">{title}</span>
      </p>
      <button
        onClick={onClose}
        className="absolute top-1 right-2 text-white hover:text-gray-200"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;