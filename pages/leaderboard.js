import Head from "next/head";

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
          <meta name="description" content="Website of Prasmul Gear Up 2022" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
          PGU 2022 Leaderboard
        </h1>
        <p
          style={{ textAlign: "center", color: "#437384", fontSize: "1.5rem" }}
        >
          Last updated: 17 July 2022 HH:MM:SS
        </p>
        <div style={{ marginTop: 60 }}>
          <LeaderboardTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default leaderboard;
