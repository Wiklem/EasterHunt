import React from "react";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import water from "../../../assets/tasks/water.jpg";

const Task4: React.FC = () => {
  const task = () => (
    <div>
      <p>Hvilke to andre navn bruker vi om høyvann og lavvann?</p>
    </div>
  );

  const alternatives = [
    { alternative: "A", description: "Høytrykk og lavtrykk." },
    { alternative: "B", description: "Baluba" },
    { alternative: "C", description: "Gå i baret" },
    { alternative: "D", description: "Flo og fjære." },
    { alternative: "E", description: "Langvann og lavvann" },
  ];

  const correct = "D";

  return (
    <TaskRenderer
      number={"4"}
      taskInfo={task()}
      correctAnswer={correct}
      alternatives={alternatives}
      cover={<img src={water} alt={"Oppgave bilde"} />}
      location={{ lat: 58.183250300000005, lng: 8.0929092 }}
      mapHint={"Nesten hjemme"}
    />
  );
};

export default Task4;
