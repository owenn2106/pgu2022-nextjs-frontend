import Layout from "../components/main/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <div>Under Maintainance...</div>;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
