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
            <h2 style={{ width: "150px" }}>23 januari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>Forum sosialisasi</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "180px" }}>30 Januari - 1 Februari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>Pengambilan Berkas</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "180px" }}>3 februari - 6 februari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>pengembalian berkas</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>9 februari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>verifikasi berkas</h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>15 februari 2023</h2>
            <div className={dotsActive}></div>
            <h2 style={{ width: "150px" }}>Sidang MPA PP </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
