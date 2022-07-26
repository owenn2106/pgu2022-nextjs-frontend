import Head from "next/head";
import Header from "../components/Community/Header";
import Body from "../components/Community/Body";

import styles from "../styles/Community/Body.module.css";

const community = () => {
  return (
    <>
      <Head>
        <title>PGU&apos;22 - Community Life</title>
        <meta name="description" content="Website of Prasmul Gear Up 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">
        <div className={styles.BodyWrapper}>
          <Body />
        </div>
      </div>
    </>
  );
};

export default community;
