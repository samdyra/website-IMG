import React from "react";
import style from "./style.module.scss";

const ProgressBar = () => {
  const { progressBarContainer, progressBar, bar, dots, dotsContainer } = style;
  return (
    <div className={progressBarContainer}>
      <div className={bar}></div>
      <div className={progressBar}>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>15 Oktober 2022</h2>
          <div className={dots}></div>
          <h2 style={{ width: "150px" }}>Pembukaan penjualan tiket</h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>22 Oktober 2022</h2>
          <div className={dots}></div>
          <h2 style={{ width: "200px" }}>
            Penutupan penjualan tiket early bird
          </h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "160px" }}>15 November 2022</h2>
          <div className={dots}></div>
          <h2 style={{ width: "170px" }}>Penutupan penjualan tiket reguler</h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>1 Februari 2023</h2>
          <div className={dots}></div>
          <h2 style={{ width: "250px", height: "40px" }}>
            Pembagian race pack
          </h2>
        </div>
        <div className={dotsContainer}>
          <h2 style={{ width: "150px" }}>4 Februari 2023</h2>
          <div className={dots}></div>
          <h2 style={{ width: "250px" }}>
            Hari pelaksanaan dan pengumuman pemenang
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
