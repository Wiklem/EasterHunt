import React from "react";
import styles from "./Layout.module.css";
import { Avatar, Button } from "antd";

import logo from "../../assets/logo.png";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { name, signIn, signOut } = React.useContext(AuthContext);
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerItem}>
          <Avatar src={logo} />
        </div>

        <h1 className={styles.rainbow}>Påskejakten</h1>
        <div className={styles.headerItem}>
          {name ? (
            <Button icon={<LogoutOutlined />} onClick={signOut}>
              Logg ut
            </Button>
          ) : (
            <Button icon={<LoginOutlined />} onClick={signIn}>
              Logg inn
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
