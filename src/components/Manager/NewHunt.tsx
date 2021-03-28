import React from "react";
import { Alert, Button, Input, Modal } from "antd";
import { Link } from "react-router-dom";
import WriteData from "../../api/writeData";

interface INewHunt {
  id: string;
  reload: () => void;
}

const NewHunt: React.FC<INewHunt> = ({ id, reload }) => {
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleOk = () => {
    if (name) {
      setLoading(true);
      WriteData.newHunt(id, name)
        .then(() => {
          setIsModalVisible(false);
          reload();
        })
        .catch(() => setError(true))
        .finally(() => setLoading(false));
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button type={"primary"} onClick={() => setIsModalVisible(true)}>
          Opprett en ny påskejakt
        </Button>
        <Link to={"/kontakt"}>
          <Button>Kontakt Påskejakten.no</Button>
        </Link>
      </div>

      <Modal
        title="Opprett ny påskejakt"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Avbryt
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            loading={loading}
          >
            Ok
          </Button>,
        ]}
      >
        {error && <Alert message={error} type="error" showIcon />}
        <p>Hva skal påskejakten hete?</p>
        <Input
          placeholder={"Navn på jakt"}
          onChange={(e) => setName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default NewHunt;
