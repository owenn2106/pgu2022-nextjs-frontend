import { Table } from "antd";

const LeaderboardTable = ({ data }) => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Team Name",
      dataIndex: "team_name",
      key: "rank",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "rank",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "rank",
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default LeaderboardTable;
