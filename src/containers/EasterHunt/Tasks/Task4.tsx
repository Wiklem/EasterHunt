import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";

const Task4: React.FC = () => {
  const task = () => (
    <div>
      <p> Oppgave 4?</p>
    </div>
  );

  const correct = "Erlend";

  return (
    <TaskRenderer
      number={"4"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.183280300000005, lng: 8.0939992 }}
      mapHint={"Vaffelbua"}
    />
  );
};

export default Task4;
