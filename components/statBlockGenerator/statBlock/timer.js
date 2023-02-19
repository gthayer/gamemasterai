import React, { useState, useEffect } from "react";
import styles from './Statblock.module.css';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
	<div className={styles.creatureHeading}>
		<h1>Loading...</h1>
		<h2>This can take up to a minute. {seconds}s</h2>
	</div>
  );
}

export default Timer;