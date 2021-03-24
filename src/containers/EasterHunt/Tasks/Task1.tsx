import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import eifel from "../../../assets/tasks/eifel.jpg";

const Task1: React.FC = () => {
  const alternatives = [
    { alternative: "A", description: "London" },
    { alternative: "B", description: "Paris" },
    { alternative: "C", description: "Ørland" },
    { alternative: "D", description: "Roma" },
    { alternative: "E", description: "Belgia" },
  ];
  const task = () => (
    <div>
      <p>Hva heter hovedstaden i Frankrike?</p>
    </div>
  );

  const correct = "B";

  return (
    <TaskRenderer
      number={"1"}
      taskInfo={task()}
      correctAnswer={correct}
      alternatives={alternatives}
      cover={<img src={eifel} alt={"Oppgave bilde"} />}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Nesten hjemme"}
    />
  );
};

export default Task1;
