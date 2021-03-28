import * as React from "react";
import { Upload, message, Button, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Storage from "../../api/storage";
import Loading from "../Loading";

interface ITaskImageEditor {
  huntId: string;
  taskId: string;
  image?: string;
  setImage: (url: string) => void;
}

const TaskImageEditor: React.FC<ITaskImageEditor> = ({
  huntId,
  taskId,
  image,
  setImage,
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleChange = (info: any) => {
    if (info.file.status === "uploading") {
      setLoading(true);
    }
    if (info.file.status === "done") {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? <Loading /> : <Image src={image} />}
      <br />
      <Upload
        onChange={handleChange}
        beforeUpload={(file) => {
          const isImage = file.type.indexOf("image/") === 0;
          if (!isImage) {
            message.error("Du kan bare laste opp bildefiler!");
          }

          // You can remove this validation if you want
          const isLt5M = file.size / 1024 / 1024 < 5;
          if (!isLt5M) {
            message.error("Image must smaller than 5MB!");
          }
          return isImage && isLt5M;
        }}
        maxCount={1}
        customRequest={async ({ onError, onSuccess, file }) => {
          try {
            const newImage = await Storage.uploadImage(huntId, taskId, file);
            const imageUrl = await newImage.ref.getDownloadURL();
            setImage(imageUrl);
            //@ts-ignore
            onSuccess(null, newImage);
          } catch (e) {
            onError && onError(e);
          }
        }}
      >
        <Button icon={<UploadOutlined />}>
          {image ? "Endre " : " Last opp "} bilde
        </Button>
      </Upload>
    </div>
  );
};

export default TaskImageEditor;
