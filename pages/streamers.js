// pages/streamers.js
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Streamers() {
    const router = useRouter();

    const [streams, setStreams] = useState(null);

    function mapStreamerData(data) {
        const mappedData = data.map(stream => {
            return {
                username: stream.username ?? stream.userName ?? 'uberguy',
                icon: stream.icon ?? 'https://static-cdn.jtvnw.net/jtv_user_pictures/6cd4de40-1a83-46c7-aea5-3bd73f90e7e4-profile_image-70x70.png',
                live: stream.live ?? true,
                game: stream.gameName ?? 'Somegame',
                viewers: stream.viewers ?? 0,
            }
        });

        setStreams(mappedData);
    }

    function handleJoinQuiz(username) {
        router.push('/quiz'); // Navigate to the desired route
    }

    useEffect(() => {
        // Fetch quiz data from the API
        async function fetchStreamers() {
            const response = await fetch('/api/streamers');
            const data = await response.json();
            mapStreamerData(data);
        }

        fetchStreamers();
    }, []);

    if (!streams) return <p>Loading...</p>;


    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">Twitch Streamers</h1>
            <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {streams.map((stream) => (
                    <div
                        key={stream.username}
                        className={`p-4 bg-white rounded-lg shadow-md flex items-center justify-between space-x-4 ${
                            stream.live ? 'border-2 border-green-500' : ''
                        }`}
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={stream.icon}
                                alt={`${stream.username} icon`}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{stream.username}</h2>
                                <p className=''>
                                    {stream.game}<br/>
                                </p>
                                <p className='text-sm'>
                                    ({stream.viewers} viewers)
                                </p>
                                <p
                                    className={`mt-1 ${
                                        stream.live ? 'text-green-500' : 'text-gray-500'
                                    }`}
                                >
                                    {stream.live ? 'Currently Live' : 'Offline'}
                                </p>
                            </div>
                        </div>

                        {/* Join Quiz Button */}
                        <button
                            onClick={() => handleJoinQuiz(stream.username)}
                            className="flex flex-col items-center text-blue-600 hover:text-blue-800"
                        >
                            <svg
                                className="w-10 h-10"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-10.586L13.293 11 9 14.293V7.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="">Join Quiz</span>
                        </button>
                    </div>

                ))}
            </div>
        </div>
    );
}
