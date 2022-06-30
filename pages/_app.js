import { useEffect } from "react";
import Layout from "../components/main/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 100,
      // delay: 50,
      // mirror: true,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
