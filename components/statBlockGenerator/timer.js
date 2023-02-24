import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Loading...</h1>
      <h2>This can take up to a minute. {seconds}s</h2>
    </>
  );
}

export default Timer;