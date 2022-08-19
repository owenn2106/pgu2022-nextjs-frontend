import Head from "next/head";
import favicon from "../public/favicon.ico";

// Import Components
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import { data } from "../components/Leaderboard/data";

import styles from "../styles/Leaderboard/Leaderboard.module.css";

const leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <div className="container">
        <Head>
          <title>PGU&apos;22 - Leaderboard</title>
          <meta
            name="description"
            content="Website of Prasmul Gear Up 2022 - Leaderboard"
          />
          <meta property="og:type" content="article" />

          <meta
            property="og:title"
            content="Prasmul Gear Up 2022 Leaderboard"
          />

          <meta
            property="og:description"
            content="Check out your team's ranking here!"
          />

          <meta property="og:image" content={favicon} />

          <meta
            property="og:url"
            content="https://prasmulgearup.com/leaderboard/"
          />

          <meta
            property="og:site_name"
            content="Prasmul Gear Up 2022 Leaderboard"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          PGU 2022 Leaderboard - FINAL
        </h1>
        {/* <p
          style={{ textAlign: "center", color: "#437384", fontSize: "1.5rem" }}
        >
          Last updated: 18 August 2022 13:30:00 WIB
        </p> */}
        <p style={{ textAlign: "center", paddingTop: "2em" }}>
          Use{" "}
          <code
            style={{
              borderRadius: "5px",
              backgroundColor: "#202124",
              color: "#437384",
              padding: ".2em .5em",
            }}
          >
            ctrl + f
          </code>{" "}
          or{" "}
          <code
            style={{
              borderRadius: "5px",
              backgroundColor: "#202124",
              color: "#437384",
              padding: ".2em .5em",
            }}
          >
            cmd + f
          </code>{" "}
          to find your team name!
        </p>
        <div style={{ marginTop: 60 }}>
          <LeaderboardTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default leaderboard;
