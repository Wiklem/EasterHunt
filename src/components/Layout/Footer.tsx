import React from "react";
import styles from "./Layout.module.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  if (location.pathname.includes("/jakt/")) return null;
  return (
    <div className={styles.footer}>
      <Link style={{ color: "white", textDecoration: "underline" }} to={"/"}>
        Påskejakten.no
      </Link>{" "}
      - Copyright © Wiklem.no. All Rights Reserved
    </div>
  );
};

export default Footer;
