import { useState, useEffect } from "react";
import Head from "next/head";

// Import Components
import LeaderboardTable from "../components/Leaderboard/LeaderboardTable";
import APIService from "../components/APIService";

const leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    APIService.GetLeaderboard().then((data) => setData(data));
  }, []);

  return (
    <div className="container">
      <Head>
        <title>PGU'22 - Leaderboard</title>
      </Head>

      <h1 style={{ textAlign: "center", marginTop: 16 }}>
        PGU 2022 Leaderboard
      </h1>
      <p>
        Last updated:{" "}
        {data.length !== 0
          ? new Date(data[0].last_updated).toDateString()
          : null}
      </p>
      <LeaderboardTable data={data} />
    </div>
  );
};

export default leaderboard;
