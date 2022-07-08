import { useEffect } from "react";
import Layout from "../components/main/Layout";
// import AOS from "aos";
// import "aos/dist/aos.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // AOS.init({
    //   easing: "ease-out-cubic",
    //   offset: 100,
    // });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
