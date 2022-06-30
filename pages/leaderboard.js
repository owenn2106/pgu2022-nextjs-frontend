import Head from "next/head";

// Import Components
// import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";

import styles from "../styles/Leaderboard/Leaderboard.module.css";

const leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <div className="container">
        <Head>
          <title>PGU'22 - Leaderboard</title>
        </Head>

        <h1 style={{ textAlign: "center" }}>PGU 2022 Leaderboard</h1>
        {/* <p style={{ textAlign: "center" }}>
          Last updated:{" "}
          {data.length !== 0
            ? new Date(data[0].last_updated).toDateString()
            : null}
        </p>
        <div style={{ marginTop: 60 }}>
          <LeaderboardTable data={data} />
        </div> */}
      </div>
    </div>
  );
};

export default leaderboard;
