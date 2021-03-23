import React from "react";
import { EasterContext } from "../EasterContext";
import { DistanceMatrixService } from "@react-google-maps/api";
import { ITask } from "../../api/types";

interface IMapDistance {
  location: ITask["location"];
  distanceCallback: (distance: any) => void;
}

const MapDistance: React.FC<IMapDistance> = ({
  location,
  distanceCallback,
}) => {
  const { currentPosition } = React.useContext(EasterContext);
  const [lastPosition, setLastPosition] = React.useState({});

  if (!currentPosition || currentPosition === lastPosition) return null;

  return (
    <DistanceMatrixService
      options={{
        destinations: [location],
        origins: [currentPosition],
        travelMode: "WALKING",
      }}
      callback={(response) => {
        if (response) {
          setLastPosition(currentPosition);
          distanceCallback(response);
        }
      }}
    />
  );
};

export default MapDistance;
