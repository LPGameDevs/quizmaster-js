import Head from "next/head";
import Link from "next/link";
import Banner from '../components/banner';

import {useNotification} from '../contexts/notification';
import React, {useEffect, useState} from "react";


const Index = () => {
  // const { showNotification } = useNotification();

  const [showBanner, setShowBanner] = useState(true);
  const bannerMessage = "Have a look at our current streamers on Twitch!!";
  const bannerType = "warning"; // Change to success, warning, or error as needed


  // useEffect(() => {
  //   showNotification('Hello', 'warning');
  // }, []);


  return (
    <div>
      <Head>
        <title>The page title</title>
      </Head>

      {showBanner && <Banner message={bannerMessage} type={bannerType}>
        <>
          <br/>
          <Link href="/streamers" className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Streamers
          </Link>
        </>
      </Banner>
      }

      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-bold text-blue-600">Welcome</h1>
        <h2 className="text-2xl font-semibold mt-4">Let the quizing begin...</h2>
        <p className="mt-2 text-gray-600">Click the button below to start a random quiz</p>
        <Link href="/quiz" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Start New Quiz
        </Link>
      </div>

    </div>
  )
}
export default Index