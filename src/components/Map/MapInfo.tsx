import React from "react";
import { InfoWindow, Marker } from "@react-google-maps/api";
import mina from "../../assets/mina-map.png";
import logo from "../../assets/easter-egg.svg";
import styles from "./Map.module.css";
import { ITask } from "../../utils/types";
import Loading from "../Loading";
import { EasterContext } from "../EasterContext";
interface IMapInfo {
  location: ITask["location"];
  mapHint: ITask["mapHint"];
}

const MapInfo: React.FC<IMapInfo> = ({ location, mapHint }) => {
  const { currentPosition } = React.useContext(EasterContext);
  const [showInfo, setShowInfo] = React.useState(false);

  if (!currentPosition) return <Loading />;
  return (
    <>
      <Marker position={currentPosition} icon={mina} />
      <>
        <Marker
          position={location}
          onClick={() => setShowInfo(!showInfo)}
          icon={{ url: logo }}
        />

        {showInfo && (
          <InfoWindow
            position={location}
            onCloseClick={() => setShowInfo(!showInfo)}
          >
            <div className={styles.infoWindow}>{mapHint}</div>
          </InfoWindow>
        )}
      </>
    </>
  );
};

export default MapInfo;
