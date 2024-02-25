import React from "react";
import { isMobile } from "../../../Helpers/mobileResponsive";
import style from "./style.module.scss";

const ProgressBar = () => {
  const {
    background,
    progressBarContainer,
    progressBar,
    bar,
    dotsContainer,
    dotsActive,
    miniDots,
    miniDotsContainer,
  } = style;

  return (
    <div className={background}>
      <div className={progressBarContainer}>
        <div className={bar}></div>
        <div className={miniDotsContainer}>
          <div className={miniDots}></div>
          <div className={miniDots}></div>
        </div>
        <div className={progressBar}>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>21 Februari 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 1</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>23 Februari 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 2</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>26 Februari 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 3</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>28 Februari 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 4</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>15 februari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 5</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>4 Maret 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 6</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>6 Maret 2024</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>MPA 7</h2>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
