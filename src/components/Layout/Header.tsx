import React from "react";
import styles from "./Layout.module.css";
import { Button, PageHeader } from "antd";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { AuthContext } from "../../context/AuthContext";

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { user, signIn, signOut } = React.useContext(AuthContext);
  return (
    <div className={styles.header}>
      <PageHeader
        title={
          <Link to={"/"}>
            <span className={styles.rainbow}>Påskejakten</span>
          </Link>
        }
        avatar={{ src: logo, shape: "square" }}
        extra={
          user ? (
            <>
              <Link to={"/administrer"}>
                <Button icon={<LogoutOutlined />}>Mine påskejakter</Button>
              </Link>
              <Button icon={<LogoutOutlined />} onClick={signOut}>
                Logg ut
              </Button>
            </>
          ) : (
            <Button icon={<LoginOutlined />} onClick={signIn}>
              Logg inn
            </Button>
          )
        }
      />
    </div>
  );
};

export default Header;
