// pages/streamers.js
import {useEffect, useState} from "react";

export default function Streamers() {

  const [streamers, setStreamers] = useState(null);

  useEffect(() => {
    // Fetch quiz data from the API
    async function fetchStreamers() {
      const response = await fetch('/api/streamers');
      const data = await response.json();
      setStreamers(data);
    }

    fetchStreamers();
  }, []);

  if (!streamers) return <p>Loading...</p>;


  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Twitch Streamers</h1>
      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {streamers.map((streamer) => (
          <div
            key={streamer.username}
            className={`p-4 bg-white rounded-lg shadow-md flex items-center space-x-4 ${
              streamer.live ? 'border-2 border-green-500' : ''
            }`}
          >
            <img
              src={streamer.icon}
              alt={`${streamer.username} icon`}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{streamer.username}</h2>
              <p
                className={`mt-1 ${
                  streamer.live ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                {streamer.live ? 'Currently Live' : 'Offline'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
