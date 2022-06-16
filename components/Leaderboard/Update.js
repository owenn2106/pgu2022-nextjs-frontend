import { useState } from "react";
import { Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import APIService from "../APIService";

const Update = () => {
  const [file, setFile] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("excel", file[0]);
    setUploading(true);

    APIService.UpdateLeaderboard(formData)
      .then((json) => {
        json["message"] === "success"
          ? message.success("Leaderboard has been updated")
          : message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
        setFile([]);
      });
  };

  const handleFile = (e) => {
    setFile([e.file.originFileObj]);
  };

  return (
    <>
      <Upload onChange={handleFile} maxCount={1} fileList={file}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={file.length === 0}
        loading={uploading}
        style={{ marginTop: 16 }}
      >
        {uploading ? "Uploading" : "Upload Now!"}
      </Button>
      <p style={{ marginTop: 8 }}>
        <strong>Note:</strong>
        <br />
        File extension that's accepted is .xlsx only.
      </p>
    </>
  );
};

export default Update;
