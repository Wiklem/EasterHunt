import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import ruby from "../../../assets/tasks/ruby.jpg";

const Task3: React.FC = () => {
  const task = () => (
    <div>
      <p>Hvilken farge har en rubin?</p>
    </div>
  );

  const correct = "rød";

  return (
    <TaskRenderer
      number={"3"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Ingen hint!"}
      cover={<img src={ruby} alt={"Oppgave bilde"} />}
    />
  );
};

export default Task3;
