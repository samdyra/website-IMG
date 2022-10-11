import React from "react";
import { useState, useEffect } from "react";

function calculateTimeLeft() {
  const year = new Date().getFullYear();
  // console.log(new Date());
  const difference = +new Date(`${year}-10-12`) - +new Date();

  // const d = new Date(`${year}-03-25T12:00:00`);
  // console.log(d);

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
    };
  }

  return timeLeft;
}

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    return timeLeft[interval];
  });

  // console.log(timerComponents[0]);

  return (
    <div>{timerComponents.length ? timerComponents : <span>0 0 0</span>}</div>
  );
};

export default CountDown;
