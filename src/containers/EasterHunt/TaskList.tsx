import React from "react";
import { EasterContext } from "../../components/EasterContext";
import Task1 from "./Tasks/Task1";
import Task2 from "./Tasks/Task2";
import Task3 from "./Tasks/Task3";
import Task4 from "./Tasks/Task4";
import Task5 from "./Tasks/Task5";
import Task6 from "./Tasks/Task6";

const TaskList = () => {
  const { step } = React.useContext(EasterContext);
  switch (step) {
    case "1":
      return <Task1 />;
    case "2":
      return <Task2 />;
    case "3":
      return <Task3 />;
    case "4":
      return <Task4 />;
    case "5":
      return <Task5 />;
    case "6":
      return <Task6 />;
    default:
      localStorage.setItem("step", "1");
      return <Task1 />;
  }
};

export default TaskList;
