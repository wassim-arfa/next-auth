import { appWithTranslation } from 'next-i18next';
import Navbar from '../components/Navbar';
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return <div><Navbar/><Component {...pageProps} /></div>;
}

export default appWithTranslation(MyApp);
