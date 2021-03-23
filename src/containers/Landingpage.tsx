import React from "react";
import styles from "./Landingpage.module.css";
import Countdown from "../components/Countdown";
import InitHunt from "./EasterHunt/InitHunt";

const Landingpage = () => {
  return (
    <div className={styles.container}>
      <Countdown />
      <h1 className={styles.rainbowText}>Påskejakten</h1>
      <InitHunt />
    </div>
  );
};

export default Landingpage;
