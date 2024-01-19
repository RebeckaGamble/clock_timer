import React, { useState, useEffect } from "react";
//todo: Use new Date().toLocaleTimeString() as clock state to show the current time.
//todo: Use setInterval to update state every 1000 ms. setInterval should be called inside useEffect.
//your clock two props: city and timeZone.
//! Use the city prop to show the city title of the clock and the timeZone prop to show time at that timezone.

const Clock = ({ city, timeZone }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTime = time.toLocaleTimeString("en-UK", {
    timeZone: timeZone,
  });

  return (
    <div className="clock">
      <p className="clockTitle">{city}</p>
      <h3>{currentTime}</h3>
    </div>
  );
};

export default Clock;
