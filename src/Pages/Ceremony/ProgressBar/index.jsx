import React from "react";
import style from "./style.module.scss";

const ProgressBar = ({ page }) => {
  const {
    progressBarContainer,
    progressBar,
    bar,
    dots,
    dotsContainer,
    dotsActive,
  } = style;

  return (
    <div className={progressBarContainer}>
      <div className={bar}></div>
      <div className={progressBar}>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>13 November 2022</h2>
          <div className={dotsActive}></div>
          <h2 style={{ width: "200px" }}>
            Pembukaan pendaftaran peserta audisi
          </h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>13 Desember 2022</h2>
          <div className={dots}></div>
          <h2 style={{ width: "150px" }}>Penutupan pendaftaran</h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "220px" }}>21—23 November 2022</h2>
          <div className={dots}></div>
          <h2 style={{ width: "150px", height: "30px" }}>Pelaksanaan audisi</h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>4 Januari 2023</h2>
          <div className={dots}></div>
          <h2 style={{ width: "150px" }}>Pengumuman pemenang audisi</h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>4 Februari 2023</h2>
          <div className={dots}></div>
          <h2 style={{ width: "220px" }}>Hari pelaksanaan Closing Ceremony</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
