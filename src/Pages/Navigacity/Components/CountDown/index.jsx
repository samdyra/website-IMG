import React from "react";
import { useState, useEffect } from "react";
import style from "./style.module.scss";

function calculateTimeLeft() {
  const year = new Date().getFullYear();

  const difference = +new Date(`${year}-11-16`) - +new Date();

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
  const { dateContainer, container, containerBorder, dateTitle } = style;

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

  return (
    <div className={container}>
      <div className={containerBorder}>
        <div className={dateContainer}>
          {timerComponents[0]}
          <div className={dateTitle}>HARI</div>
        </div>
      </div>
      <div className={containerBorder}>
        <div className={dateContainer}>
          {timerComponents[1]}
          <div className={dateTitle}>JAM</div>
        </div>
      </div>
      <div className={containerBorder}>
        <div className={dateContainer}>
          {timerComponents[2]}
          <div className={dateTitle}>MENIT</div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
