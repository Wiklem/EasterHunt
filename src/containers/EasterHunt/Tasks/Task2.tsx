import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";

const Task2: React.FC = () => {
  const task = () => (
    <div>
      <p> Hvem er tøff?</p>
    </div>
  );

  const correct = "Erlend";

  return (
    <TaskRenderer
      number={"2"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.191586, lng: 8.080615 }}
      mapHint={"Vaffelbua"}
    />
  );
};

export default Task2;
