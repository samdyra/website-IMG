import React from "react";
import s from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";
import LogoPansusFix from "../../assets/images/LogoPansusFix.png";
import ProgressBar from "./ProgressBar";
import videoplayback from "../../assets/video/videoplayback.webm";

const Pemilu = () => {
  const { buttonDokumen } = s;
  return (
    <div className={s.wrapper}>
      <div className={s.backgroundTop}>
        <video
          autoPlay
          muted
          loop
          src={videoplayback}
          style={{ width: "100vw" }}
        />
        <div className={s.backgroundTop2}></div>
      </div>
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
        <h1 style={{ marginBlock: "100px" }}>who’s the next pirate king?</h1>
        <div className={s.section}>
          <div>
            <div className={s.text_container} style={{ marginBottom: "15px" }}>
              <h1>Nama: Daffa DHimas Raditya</h1>
              <h1>NIM: 15121061</h1>
            </div>
            <div className={s.text_container}>
              <h1>VISI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et faucibus vulputate
                massa nec libero mattis habitant mauris sagittis. Sagittis sem
                lectus interdum.
              </p>
              <h1>MISI</h1>
            </div>
          </div>
          <div></div>

          <div className={s.text_container}>
            <h1>program kerja</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Et faucibus vulputate
              massa nec libero mattis habitant mauris sagittis. Sagittis sem
              lectus interdum. Lorem ipsum dolor sit amet consectetur. Et
              faucibus vulputate massa nec libero mattis habitant mauris
              sagittis. Sagittis sem lectus interdum.
            </p>
          </div>
        </div>
        <div className={s.vote_button}>VOTE YOUR PIRATE KING NOW!</div>
      </div>
    </div>
  );
};

export default Pemilu;
