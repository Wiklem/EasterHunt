import React from "react";
import Loading from "../components/Loading";
import { ILocation } from "../utils/types";
import { LoadScript } from "@react-google-maps/api";
import API from "../utils/keys";
import { Alert } from "antd";

interface IEasterContext {
  currentPosition: ILocation | null;
}
export const EasterContext = React.createContext<IEasterContext>({
  currentPosition: null,
});

const EasterContextProvider: React.FC = ({ children }) => {
  const [currentPosition, setCurrentPosition] = React.useState<ILocation>();
  const [error, setError] = React.useState<string>();

  const success = (position: any) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  const gotError = (e: any) => {
    if (e.code === 1) {
      setError(
        "Du må tilate nettsiden å bruke din posisjon for å bruke påskejakten. "
      );
    } else {
      setError("Klarte ikke å hente enhetens posisjon.");
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.watchPosition(success, gotError, {
        enableHighAccuracy: true,
      });
    }, 1000);
    return () => clearInterval(interval);
  });

  if (error)
    return (
      <Alert
        message={error}
        type={"error"}
        showIcon
        description={
          "Siden trenger posisjon for å navigere deg fram til påskeeggene."
        }
      />
    );
  if (!currentPosition)
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Alert
            style={{ width: "500px" }}
            message={
              "Du må tillate siden å bruke din posisjon for å bruke Påskejakten.no"
            }
            showIcon
          />
        </div>
        <Loading />
      </div>
    );
  return (
    <EasterContext.Provider
      value={{
        currentPosition,
      }}
    >
      <LoadScript googleMapsApiKey={API.GOOGLE}> {children} </LoadScript>
    </EasterContext.Provider>
  );
};

export default EasterContextProvider;
