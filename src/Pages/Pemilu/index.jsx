import React from "react";
import s from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";
import LogoPansusFix from "../../assets/images/LogoPansusFix.png";
import ProgressBar from "./ProgressBar";
import videoplayback from "../../assets/video/videoplayback.webm";
import { Adam_Caketum1, Venta_Caketum2 } from "../../assets";

const Pemilu = () => {
  const { buttonDokumen } = s;
  return (
    <div className={s.wrapper}>
      <div className={s.backgroundTop}>
        <video autoPlay playsInline muted loop src={videoplayback} />
        <div className={s.backgroundTop2}></div>
      </div>

      <div className={s.containerTop}>
        <img src={LogoPansusFix} alt="" />
        {isMobile ? (
          <h1>
            Panitia Khusus <br /> Pemilu IMG-ITB 2023
          </h1>
        ) : (
          <h1>Panitia Khusus Pemilu IMG-ITB 2023</h1>
        )}

        <h2>
          Pemilu IMG-ITB 2023 merupakan rangkaian acara pesta demokrasi untuk
          regenerasi Ketua Umum IMG-ITB.
        </h2>
        <button
          className={buttonDokumen}
          onClick={() =>
            window.open("https://linktr.ee/PemiluIMG2023", "_blank")
          }
        >
          Dokumen Pemilu IMG-ITB 2023
        </button>
      </div>
      <ProgressBar />

      <div className={s.container}>
        <h1 style={{ marginBlock: "100px" }}>who’s the next pirate king?</h1>
        <div className={s.section}>
          {isMobile && (
            <div className={s.caketum_container}>
              <div className={s.no_caketum}>1</div>
              <img src={Adam_Caketum1} alt="" />
            </div>
          )}
          <div>
            <div className={s.text_container} style={{ marginBottom: "15px" }}>
              <h1>Nama : Zachary Adam hidayat</h1>
              <h1>NIM : 15120005</h1>
            </div>
            <div className={s.text_container} style={{ height: "376px" }}>
              <h1>VISI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et faucibus vulputate
                massa nec libero mattis habitant mauris sagittis. Sagittis sem
                lectus interdum.
              </p>
              <h1>MISI</h1>
            </div>
          </div>
          {!isMobile && (
            <div className={s.caketum_container}>
              <div className={s.no_caketum}>1</div>
              <img src={Adam_Caketum1} alt="" />
            </div>
          )}

          <div className={s.text_container} style={{ height: "500px" }}>
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
        {/* <div className={s.vote_button}>VOTE YOUR PIRATE KING NOW!</div> */}
      </div>
      <div className={s.container}>
        <div className={s.section}>
          {isMobile && (
            <div className={s.caketum_container}>
              <div className={s.no_caketum}>2</div>
              <img src={Venta_Caketum2} alt="" />
            </div>
          )}
          <div>
            <div className={s.text_container} style={{ marginBottom: "15px" }}>
              <h1>Nama : Michael Aventa</h1>
              <h1>NIM : 15120067</h1>
            </div>
            <div className={s.text_container} style={{ height: "376px" }}>
              <h1>VISI</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Et faucibus vulputate
                massa nec libero mattis habitant mauris sagittis. Sagittis sem
                lectus interdum.
              </p>
              <h1>MISI</h1>
            </div>
          </div>
          {!isMobile && (
            <div className={s.caketum_container}>
              <div className={s.no_caketum}>2</div>
              <img src={Venta_Caketum2} alt="" />
            </div>
          )}

          <div className={s.text_container} style={{ height: "500px" }}>
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
        {/* <div className={s.vote_button}>VOTE YOUR PIRATE KING NOW!</div> */}
      </div>
    </div>
  );
};

export default Pemilu;
