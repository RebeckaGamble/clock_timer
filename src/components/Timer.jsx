import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(600); //start time 10 min (600sec)
  const [isRunning, setIsRunning] = useState(false); //not running from start

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0"); //show min with 2 dig
  const seconds = (time % 60).toString().padStart(2, "0"); //show seconds with 2dig

  //start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  //takes 2args - func and arr with dep
  useEffect(() => {
    let interval;
    //start timer only when isRunning = true and time is more than 0sec
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1); //decrement prev state (setTime) whit 1 every sec
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]); //executes when dep changes

  //stop timer
  const stopTimer = () => {
    setIsRunning(false);
    if (time === 0) { //when time is 0 restart
      resetTimer();
    }
  };

  //reset timer
  const resetTimer = () => {
    setTime(600);
    setIsRunning(false);
  };

  return (
    <div className="counterContainer">
      <p className="countDown">
        {minutes}:{seconds}{" "}
      </p>
      <div className="btnContainer">
        <button type="button" onClick={startTimer} disabled={isRunning}>  {/** disabled when running*/}
          Start Timer 
        </button>

        {isRunning ? (
          <button type="button" onClick={stopTimer}>
            {time === 0 ? "Reset Timer" : "Stop Timer"}{" "} 
          </button>
        ) : (
          <button
            type="button"
            onClick={resetTimer}
            disabled={!isRunning && time === 600}
          >  {/** disabled when time is 10.00 and not running*/}
            {" "}
            Reset Timer
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
