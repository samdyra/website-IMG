import React from "react";
import style from "./style.module.scss";

const ProgressBar = ({ page }) => {
  const {
    background,
    progressBarContainer,
    progressBar,
    bar,
    dots,
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
          <div className={miniDots} style={{ background: "black" }}></div>
          <div className={miniDots}></div>
        </div>
        <div className={progressBar}>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>15 Oktober 2022</h2>
            <div className={dotsActive}></div>
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
            <h2 style={{ width: "170px" }}>
              Penutupan penjualan tiket reguler
            </h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>1 Februari 2023</h2>
            <div className={dots}></div>
            <h2 style={{ width: "250px" }}>
              Pembagian race <br></br> pack
            </h2>
          </div>
          <div className={dotsContainer}>
            <h2 style={{ width: "150px" }}>4 Februari 2023</h2>
            <div className={dots}></div>
            <h2 style={{ width: "220px" }}>
              Hari pelaksanaan dan pengumuman pemenang
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
