import styles from "../../styles/Leaderboard/Leaderboard.module.css";

const Row = ({ x, key }) => {
  return (
    <tr key={key} className={styles.tableBody}>
      <td>{x.rank}</td>
      <td>{x.team_name}</td>
      <td>{x.score}</td>
      <td>{x.grade}</td>
    </tr>
  );
};

const LeaderboardTable = ({ data }) => {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr className={styles.tableHeader}>
          <th>Rank</th>
          <th>Team Name</th>
          <th>Score</th>
          <th>Grade</th>
        </tr>
        {data.map((x, key) => {
          return <Row x={x} key={key} />;
        })}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
