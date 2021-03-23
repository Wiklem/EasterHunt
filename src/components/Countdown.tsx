import React from "react";
import "./countdown.css";
import Loading from "./Loading";
import {timeDifference} from "./Utils";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState<any>();

  const calculateTimeLeft = () => {
    const difference = timeDifference()
    return {
      dager: Math.floor(difference / (1000 * 60 * 60 * 24)),
      timer: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutter: Math.floor((difference / 1000 / 60) % 60),
      sekunder: Math.floor((difference / 1000) % 60),
    };
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return <Loading />;

  return (
    <div className={"container"}>
      Der er{" "}
      {timeLeft &&
        Object.keys(timeLeft).map((key) => (
          <span key={key}>
            {timeLeft[key]} {key}{" "}
          </span>
        ))}
      igjen!
    </div>
  );
};

export default Countdown;
