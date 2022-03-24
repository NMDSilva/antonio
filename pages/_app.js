import 'materialize-css/dist/css/materialize.min.css';
import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('materialize-css');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
