import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";

const Task3: React.FC = () => {
  const task = () => (
    <div>
      <p> Skriv Erlend</p>
    </div>
  );

  const correct = "Erlend";

  return (
    <TaskRenderer
      number={"3"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Vaffelbua"}
    />
  );
};

export default Task3;
