import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";

const Task1: React.FC = () => {
  const task = () => (
    <div>
      <p> Hva er 8 * 3?</p>
    </div>
  );

  const correct = "24";

  return (
    <TaskRenderer
      number={"1"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Nesten hjemme"}
    />
  );
};

export default Task1;
