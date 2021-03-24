import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import hollywood from "../../../assets/tasks/hollywood.jpg";

const Task3: React.FC = () => {
  const task = () => (
    <div>
      <p>Hva heter den verdenskjente filmbyen i USA?</p>
    </div>
  );

  const correct = "hollywood";

  return (
    <TaskRenderer
      number={"6"}
      taskInfo={task()}
      correctAnswer={correct}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Ingen hint!"}
      cover={<img src={hollywood} alt={"Oppgave bilde"} />}
    />
  );
};

export default Task3;
