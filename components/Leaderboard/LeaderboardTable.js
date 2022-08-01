import Image from "next/image";
import redTriangle from "../../public/images/decor/red-triangle.png";
import greenTriangle from "../../public/images/decor/green-triangle.png";
import whiteStrip from "../../public/images/decor/white-strip.png";

import styles from "../../styles/Leaderboard/Leaderboard.module.css";

const Row = ({ x }) => {
  return (
    <tr key={x.rank} className={styles.tableBody}>
      <td>
        {x.position === "Up" ? (
          <div
            style={{
              marginRight: ".5em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={greenTriangle} height={15} width={15} />
          </div>
        ) : x.position === "Down" ? (
          <div
            style={{
              marginRight: ".5em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={redTriangle} height={15} width={15} />
          </div>
        ) : (
          <div
            style={{
              marginRight: ".5em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={whiteStrip} height={15} width={15} />
          </div>
        )}
        {x.rank}
      </td>
      <td>{x.team_name}</td>
      <td>{x.score}</td>
      <td>{x.grade}</td>
    </tr>
  );
};

const LeaderboardTable = ({ data }) => {
  return (
    <table style={{ width: "100%" }} className={styles.table}>
      <tbody>
        <tr className={styles.tableHeader}>
          <th>Rank</th>
          <th>Team</th>
          <th>Score</th>
          <th>Grade</th>
        </tr>
        {data.map((x, key) => {
          return <Row x={x} />;
        })}
      </tbody>
    </table>
  );
};

export default LeaderboardTable;
