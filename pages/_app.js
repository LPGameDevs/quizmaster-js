// pages/_app.js
import '../styles/globals.css';
import Layout from "../components/layout";
import {NotificationProvider} from '../contexts/notification';

function MyApp({Component, pageProps}) {
  return (
    <NotificationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  )

}

export default MyApp;