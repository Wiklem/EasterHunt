import React from "react";
import { Alert, Button, Input, Radio } from "antd";
import { EasterContext } from "../../../components/EasterContext";
import { ITask } from "../../../utils/types";
import styles from "./TaskView.module.css";

interface ITaskView {
  task: ITask;
}
const TaskView: React.FC<ITaskView> = ({ task }) => {
  const { nextTask } = React.useContext(EasterContext);
  const [answer, setAnswer] = React.useState<string | undefined>(undefined);

  const correctView = () => (
    <div className={styles.answerLabel}>
      <Alert message={answer + " er riktig"} type="success" showIcon />
      <div>
        <Button
          className={styles.nextButton}
          type="primary"
          block
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

  const incorrectView = () => (
    <div className={styles.answerLabel}>
      <Alert message={answer + " er feil"} type="error" showIcon />
    </div>
  );

  const inputOptions = () =>
    task.alternatives ? (
      <Radio.Group onChange={(e) => setAnswer(e.target.value)} value={answer}>
        {task.alternatives.map((a) => (
          <Radio value={a.alternative}>{a.description}</Radio>
        ))}
      </Radio.Group>
    ) : (
      <Input.Search
        allowClear
        enterButton="Ok"
        size="large"
        placeholder="Angi svar"
        onSearch={(value) => setAnswer(value)}
      />
    );

  return (
    <>
      <div>{task.taskInfo}</div>
      {inputOptions()}
      {answer !== undefined
        ? answer.toLowerCase() === task.correctAnswer?.toLowerCase()
          ? correctView()
          : incorrectView()
        : null}
    </>
  );
};

export default TaskView;
