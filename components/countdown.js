import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ showTimer = false, initialSeconds = 5, onComplete}) {
    const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);
    const [isComplete, setIsComplete] = useState(false);
    // const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        if (secondsRemaining > 0) {
            const timerId = setInterval(() => {
                setSecondsRemaining((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timerId);
        } else if (onComplete) {
            endTimer(); // Trigger the onComplete callback if provided
        }
    }, [secondsRemaining]);

    useEffect(() => {
        // Unhiding should restart the count.
        if (showTimer) {
            resetTimer()
        }
    }, [showTimer]);

    function endTimer() {
        setIsComplete(true);
        onComplete();
    }

    function resetTimer() {
        setIsComplete(false);
        setSecondsRemaining(initialSeconds);
    }

    if (!showTimer) {
        return;
    }

    // Adjust the radius for a larger circle
    const radius = 30; // Increased radius for larger circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const percentage = secondsRemaining !== initialSeconds ? (((secondsRemaining - 1) / initialSeconds) * 100) : 100;
    const dashArray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32"> {/* Adjusted container size */}

                {isComplete && (
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">
                        Time is up!
                    </div>
                )}
                {!isComplete && (
                    <>
                        <svg className="absolute inset-0 w-full h-full">
                            <circle
                                className="text-gray-300"
                                strokeWidth="4"
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="50%"
                                cy="50%"
                            />
                            <circle
                                className="text-blue-600"
                                strokeWidth="4"
                                strokeDasharray={dashArray}
                                stroke="currentColor"
                                fill="transparent"
                                r={radius}
                                cx="50%"
                                cy="50%"
                                style={initialSeconds === secondsRemaining ? {} : {transition: 'stroke-dasharray 1s linear'}}
                            />
                        </svg>
                        <div
                            className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-blue-600">
                            {secondsRemaining}s
                        </div>
                    </>
                )}
            </div>
        </div>
    )
        ;
}
