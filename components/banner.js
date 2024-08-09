import React from 'react';

const Banner = ({ children, message, type = 'info' }) => {
  const bannerStyles = {
    info: 'bg-blue-500 text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white',
  };

  return (
    <div className={`fixed top-16 left-0 w-full p-4 ${bannerStyles[type]} shadow-lg z-50`}>
      <div className="max-w-4xl mx-auto">
        <p className="text-center">
          {message}
          {children}
        </p>

      </div>
    </div>
  );
};

export default Banner;
