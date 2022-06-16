import { Typography, Button, Input, Space } from "antd";

const { Title, Text } = Typography;
const { TextArea } = Input;

const Create = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Text mark>Title</Text>
      <Input placeholder="Title of post" />
      <Text mark>Body</Text>
      <TextArea showCount maxLength={100} placeholder="Body of post" />
      <Text mark>Link (If any)</Text>
      <Input placeholder="Hyperlink to direct user to another site" />
      <br />
      <Button type="primary" style={{ width: "100%" }}>
        Post
      </Button>
    </Space>
  );
};

export default Create;
