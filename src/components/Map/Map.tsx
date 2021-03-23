import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import API from "../../api/keys";

interface IMap {}
const Map: React.FC<IMap> = ({ children }) => {
  const mapStyles = {
    height: "80vh",
    width: "80vw",
  };
  const defaultCenter = {
    lat: 58.183348,
    lng: 8.092905,
  };

  return (
    <LoadScript googleMapsApiKey={API.GOOGLE}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        {children}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
