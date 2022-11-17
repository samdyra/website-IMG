import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import { useNavigate } from "react-router-dom";

import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { CountDown } from "../Navigacity/Components";
import ProgressBar from "./ProgressBar";
import { gegepcere1, fasilitascere } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";
import { isMobile } from "../../Helpers/mobileResponsive";

const Ceremony = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   window.open("https://www.google.com", "_blank");
  // }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const {
    container,
    carouselcontainer,
    pageBackground,
    title,
    containerModal,
    containerMascot,
    buttonMascot,
    mascotText,
    titleText,
    titleTextH2,
    titleTextH3,
    teaser,
    fasilitasContainer,
    rutePetaContainer,
    rutePetaButton,
    rutePetaButtonContainer,
    containerTop,
    countDownContainer,
    countDownTitle,
    gegepHeader,
  } = style;

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    openModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [openModal]);

  return (
    <>
      <Modal open={openModal} onClose={() => setOpenModal(false)}></Modal>
      {/* Geopoint IMG-ITB 2023 */}

      <div className={pageBackground}>
        <div className={containerTop}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              border: "#fcefb5 dashed 4px",
              paddingInline: "35px",
              paddingBlock: "35px",
              gap: "25px",
            }}
          >
            <div className={countDownContainer}>
              <div className={countDownTitle}>
                <h3>Pendaftaran ditutup dalam:</h3>
              </div>
              <CountDown month={12} day={10} />
            </div>

            <div className={countDownTitle}>
              <h3>Sabtu,10 Desember 2022</h3>
            </div>

            <div
              className={buttonMascot}
              onClick={() =>
                window.open("https://bit.ly/AtlantisTheGuidebook", "_blank")
              }
            >
              Unduh Guidebook
            </div>

            <div
              className={buttonMascot}
              onClick={() =>
                window.open("https://bit.ly/PendaftaranAtlantis", "_blank")
              }
            >
              Daftar Sekarang!
            </div>
          </div>
          <div className={title}>
            <div className={titleText}>
              <div>AUDISI TALENT</div>
            </div>
            <div className={titleTextH2}>
              <h1>Closing Ceremony</h1>
            </div>
            <div className={gegepHeader}>
              <img src={gegepcere1} alt="gegepnavi1" />
            </div>
          </div>
        </div>
        <div className={containerMascot}>
          <div>
            <div className={mascotText}>
              <div
              // data-aos="fade-right"
              // data-aos-duration="600"
              // data-aos-offset="300"
              >
                <h1>
                  Closing<br></br>Ceremony
                </h1>
              </div>
              <div
              // data-aos="fade-left"
              // data-aos-duration="600"
              // data-aos-offset="300"
              >
                <p>
                  Closing ceremony adalah seremoni/upacara penutupan Geopoint
                  2023 yang menandai usainya seluruh rangkaian Geopoint. Closing
                  ceremony juga merupakan perayaan/selebrasi oleh panitia
                  Geopoint 2023 yang dipersembahkan ke masyarakat umum judul
                  acara “The Galleon: Following the Compass to Our Mystical
                  Adventure”. Closing Ceremony akan diisi oleh berbagai
                  penampil, baik oleh guest star maupun oleh talent hasil
                  audisi.
                </p>
                <p>
                  Audisi Talent Calon Artis (Atlantis) merupakan kegiatan audisi
                  yang dibuka untuk publik dalam bidang entertainment dan
                  pertunjukan. Kategori dari pertunjukan tersebut meliputi: band
                  group, vocal, solo vocal, solo instrument, group
                  instrument/orchestra, modern dance, traditional dance, dan
                  stand up comedy. Talent yang lolos audisi akan diberikan
                  kesempatan untuk tampil di rangkaian acara Geopoint 2023 dan
                  akan diberikan grand prize dengan total hadiah Rp1.000.000.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={container}>
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="300"
          >
            <div className={rutePetaContainer}>
              <h1>Denah</h1>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1SQn2DlLSLLhichXo1RGfh50IAlTKjlY&ehbc=2E312F"
                width={isMobile ? "350" : "600"}
                height={isMobile ? "300" : "400"}
              ></iframe>
            </div>
          </div>

          <div
            className={fasilitasContainer}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset={isMobile ? "150" : "300"}
          >
            <h1>Fasilitas</h1>
            <img src={fasilitascere} style={{ margin: "0 auto" }}></img>
          </div>
        </div>
        <div className={container}>
          <ProgressBar />
        </div>
        <div
          className={container}
          style={{
            paddingBottom: "170px",
            marginTop: "103px",
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="300"
        ></div>
      </div>
    </>
  );
};

export default Ceremony;
