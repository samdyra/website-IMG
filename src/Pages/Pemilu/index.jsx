import React from "react";
import s from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";
import LogoPansusFix from "../../assets/images/LogoPansusFix.png";
import ProgressBar from "./ProgressBar";

const Pemilu = () => {
  const { buttonDokumen } = s;
  return (
    <div className={s.wrapper}>
      <div className={s.backgroundTop}></div>
      <div className={s.containerTop}>
        <img src={LogoPansusFix} alt="" />
        <h1>Panitia Khusus Pemilu IMG-ITB 2023</h1>
        <h2>
          Pemilu IMG-ITB 2023 merupakan rangkaian acara pesta demokrasi untuk
          regenerasi Ketua Umum IMG-ITB.
        </h2>
        <button className={buttonDokumen}>Dokumen Pemilu IMG-ITB 2023</button>
      </div>
      <ProgressBar />
      <div className={s.container}>
        <h1>who’s the next pirate king?</h1>
      </div>
    </div>
  );
};

export default Pemilu;
