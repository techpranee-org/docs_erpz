// _app.js
import '../app/globals.css'; // Adjust the path based on where global.css is located

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
