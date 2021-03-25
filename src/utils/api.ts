import React from "react";
import axios from "axios";

const functionUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5001/paaskejakten/us-central1/"
    : "https://us-central1-wiklem-8a13e.cloudfunctions.net/";

export enum Operation {
  INIT = "init",
  WORKING = "working",
  DONE = "done",
  ERROR = "error",
}

export const useApi = (path: string) => {
  const [api, setData] = React.useState({
    status: Operation.INIT,
    data: null,
  });
  const [reloadKey, setReloadKey] = React.useState<string>("initiell");
  React.useEffect(() => {
    const hentData = async () => {
      setData({
        status: Operation.WORKING,
        data: null,
      });

      try {
        const response = await axios.get(functionUrl + path, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setData({
          status: Operation.DONE,
          data: response.data,
        });
      } catch (err) {
        setData({
          status: Operation.ERROR,
          data: null,
        });
      }
    };
    hentData();
  }, [reloadKey, path]);
  return {
    api,
    lastPaaNytt: () => {
      setReloadKey(Date.now().toString());
    },
  };
};
