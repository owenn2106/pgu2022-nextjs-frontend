import { Typography, Col, Row, Divider } from "antd";
import Head from "next/head";

// Import Components
import Update from "../components/Leaderboard/Update";
import Create from "../components/Post/Create";

const { Title } = Typography;

const admin = () => {
  return (
    <div className="container">
      <Head>
        <title>PGU'22 - Admin Page</title>
      </Head>

      <Title level={1} style={{ textAlign: "center", marginTop: 16 }}>
        Admin Page
      </Title>

      <section className="update-leaderboard" style={{ marginBottom: 32 }}>
        <Title level={2}>Update the leaderboard here!</Title>
        <Update />
      </section>

      <Divider />

      <Row>
        <Col span={24} className="create-post">
          <Title level={2}>Create a post here!</Title>
          <Create />
        </Col>
      </Row>
    </div>
  );
};

export default admin;
