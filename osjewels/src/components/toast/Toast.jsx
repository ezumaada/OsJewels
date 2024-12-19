import React from 'react';

const Toast = ({ message, onClose }) => {
  
  return (
    <div className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
      <p>{message}</p>
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-white text-lg"
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
