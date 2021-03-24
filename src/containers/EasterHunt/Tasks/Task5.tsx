import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import spain from "../../../assets/tasks/spain.jpg";

const Task5: React.FC = () => {
  const task = () => (
    <div>
      <p>Hva er ordet for venn på spansk?</p>
    </div>
  );

  const alternatives = [
    { alternative: "A", description: "Bro." },
    { alternative: "B", description: "Baluba" },
    { alternative: "C", description: "Amigo" },
    { alternative: "D", description: "Senior." },
    { alternative: "E", description: "Ketchup" },
  ];

  const correct = "C";

  return (
    <TaskRenderer
      number={"5"}
      taskInfo={task()}
      correctAnswer={correct}
      alternatives={alternatives}
      cover={<img src={spain} alt={"Oppgave bilde"} />}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Nesten hjemme"}
    />
  );
};

export default Task5;
