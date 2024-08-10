import React from 'react';

export default function Connect() {
  const handleConnect = () => {
    window.location.href = '/api/auth/login';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Connect your Twitch account</h1>
        <button
          onClick={handleConnect}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Connect with Twitch
        </button>
      </div>
    </div>
  );
}
