import React from "react";
import { Modal, Button } from "antd";
import { Input } from "antd";
import { Alert } from "antd";
import TaskList from "./TaskList";
import styles from "../Landingpage.module.css";
import logo from "../../assets/easter-egg.svg";
import Countdown from "../../components/Countdown";
import EasterContextProvider from "../../components/EasterContext";

const InitHunt = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const ready = true;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setError("");
    if (name === "Mina") {
      localStorage.setItem("name", name);
      setIsModalVisible(false);
    } else {
      setError("Du er desverre ikke med i påskejakten!");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (localStorage.getItem("name") === "Mina") {
    return (
      <EasterContextProvider>
        <TaskList />
      </EasterContextProvider>
    );
  }
  const startHunt = () => (
    <>
      <Button type="primary" onClick={showModal}>
        Start jakten
      </Button>
      <Modal
        title="Velkommen"
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
            loading={loading}
            onClick={handleOk}
          >
            Ok
          </Button>,
        ]}
      >
        {error && <Alert message={error} type="error" showIcon />}
        <p>Hvem er du?</p>
        <Input placeholder={"navn"} onChange={(e) => setName(e.target.value)} />
      </Modal>
    </>
  );

  return (
    <>
      <img className={styles.easterEgg} src={logo} alt="logo" />
      {ready ? startHunt() : <Countdown />}
    </>
  );
};

export default InitHunt;
