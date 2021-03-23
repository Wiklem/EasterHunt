import React from "react";
import { ITask } from "../../../api/types";
import Map from "../../../components/Map/Map";
import MapDistance from "../../../components/Map/MapDistance";
import MapInfo from "../../../components/Map/MapInfo";
import TaskView from "./TaskView";

interface IdistanceValues {
  text: string;
  value: number;
}

const TaskRenderer: React.FC<ITask> = (props) => {
  const { number, location, mapHint } = props;
  const [distanceValues, setDistanceValues] = React.useState<IdistanceValues>();
  const [distance, setDistance] = React.useState<any>();
  const [showTask, setShowTask] = React.useState(false);

  React.useEffect(() => {
    if (distance) {
      const distanceValues = distance.rows[0].elements[0].distance;
      if (distanceValues.value <= 10) {
        setShowTask(true);
        setDistanceValues(distanceValues);
      } else {
        setShowTask(false);
        setDistanceValues(distanceValues);
      }
    }
  }, [distance]);

  const distanceToUnlock = () => {
    if (distanceValues && distanceValues.text)
      return <p>Du er {distanceValues.text} unna å låse opp oppgaven!</p>;
  };

  const renderMap = () => (
    <Map>
      <MapDistance location={location} distanceCallback={setDistance} />
      <MapInfo location={location} mapHint={mapHint} />
    </Map>
  );

  return (
    <div>
      <strong>Oppgave {number}</strong>
      {showTask ? <TaskView task={props} /> : distanceToUnlock()}
      {renderMap()}
    </div>
  );
};

export default TaskRenderer;
