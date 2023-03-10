import MainHeader from "../components/layout/MainHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MainHeader>
      <Component {...pageProps} />
    </MainHeader>
  );
}

export default MyApp;
