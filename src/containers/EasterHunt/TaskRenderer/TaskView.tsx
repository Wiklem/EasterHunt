import React from "react";
import { Button, Input } from "antd";
import { EasterContext } from "../../../components/EasterContext";
import { ITask } from "../../../api/types";
import styles from "./TaskView.module.css";

interface ITaskView {
  task: ITask;
}
const TaskView: React.FC<ITaskView> = ({ task }) => {
  const { nextTask } = React.useContext(EasterContext);
  const [answer, setAnswer] = React.useState("");

  const correctView = () => (
    <div>
      {answer} er <span className={styles.rainbowText}>RIKTIG!</span>
      <div>
        <Button
          onClick={() => {
            let nextVal = parseInt(task.number);
            nextVal++;
            nextTask(nextVal.toString());
          }}
        >
          Gå til neste oppgave
        </Button>
      </div>
    </div>
  );

  return (
    <div className={styles.taskContainer}>
      <div>{task.taskInfo}</div>
      <Input placeholder="Svar" onChange={(e) => setAnswer(e.target.value)} />
      {answer === task.correctAnswer && correctView()}
    </div>
  );
};

export default TaskView;
