import Head from "next/head";
import Header from "../components/Community/Header";
import Body from "../components/Community/Body";

import favicon from "../public/favicon.ico";

import styles from "../styles/Community/Body.module.css";

const community = () => {
  return (
    <>
      <Head>
        <title>PGU&apos;22 - Community Life</title>
        <meta
          name="description"
          content="Website of Prasmul Gear Up 2022 - Community Life"
        />
        <meta property="og:type" content="article" />

        <meta
          property="og:title"
          content="Prasmul Gear Up 2022 Community Life"
        />

        <meta
          property="og:description"
          content="Find out more about PrasMul Community Life here!"
        />

        <meta property="og:image" content={favicon} />

        <meta
          property="og:url"
          content="https://prasmulgearup.com/community/"
        />

        <meta
          property="og:site_name"
          content="Prasmul Gear Up 2022 Community Life"
        />
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
