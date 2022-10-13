import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { CountDown, ProgressBar } from "./Components";
import { GegepNavi1, rundown } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

import MapScreen from "./Components/Map";
import HomeScreen from "../Home";

const Navigacity = () => {
  const [petaRute, setPetaRute] = useState(false);

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
        <div style={{ border: "3px solid red", zIndex: 100 }}></div>
        <div className={containerTop}>
          <div className={gegepHeader}>
            <img src={GegepNavi1} alt="gegepnavi1" />
          </div>
          <div className={title}>
            <div className={titleTextH2}>
              <h2>Navigacity:</h2>
            </div>
            <div className={titleText}>
              <h1>FUN RUN</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={titleTextH2}>
                <h2 style={{ fontSize: "35px" }}>Sabtu, 4 Februari 2023</h2>
              </div>
              <div className={buttonMascot}>Daftar Sekarang!</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "45px",
              }}
            >
              <div className={countDownContainer}>
                <div className={countDownTitle}>
                  <h3>Pendaftaran ditutup dalam:</h3>
                </div>
                <CountDown />
              </div>
            </div>
          </div>
        </div>
        <div className={containerMascot}>
          <div>
            <div className={mascotText}>
              <div
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-offset="300"
              >
                <h2>Navigacity:</h2>
                <h1>FUN RUN</h1>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-offset="300"
              >
                <p>
                  The Ferrari 458 Italia (Type F142) is a mid-engine sports car
                  produced by Ferrari. The F458 is the successor of the F430,
                  and was first officially unveiled at the 2009 Frankfurt Motor
                  Show. It was succeeded by the 488 GTB (Gran Turismo
                  Berlinetta), which was unveiled at the 2015 Geneva Motor Show.
                  {/* Perkenalkan, Gegep dan Eggy! Dua sejoli ini adalah teman
                perjalanan kamu di Geopoint IMG–ITB yang akan menemani dan
                memberikan informasi yang kamu butuhkan. */}
                </p>
                <p>
                  The Ferrari 458 Italia (Type F142) is a mid-engine sports car
                  produced by Ferrari. The F458 is the successor of the F430,
                  and was first officially unveiled at the 2009 Frankfurt Motor
                  Show. It was succeeded by the 488 GTB (Gran Turismo
                  Berlinetta), which was unveiled at the 2015 Geneva Motor Show.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={container}>
          {petaRute === false ? (
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <div className={rutePetaButtonContainer}>
                <div className={rutePetaButton}>Rute</div>
                <div
                  className={rutePetaButton}
                  style={{ background: "#4A777E", color: "#F5FCB5" }}
                  onClick={() => setPetaRute(true)}
                >
                  Peta
                </div>
              </div>
              <div className={rutePetaContainer}></div>
            </div>
          ) : (
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <div className={rutePetaButtonContainer}>
                <div
                  className={rutePetaButton}
                  style={{ background: "#4A777E", color: "#F5FCB5" }}
                  onClick={() => setPetaRute(false)}
                >
                  Rute
                </div>
                <div className={rutePetaButton}>Peta</div>
              </div>
              <div className={rutePetaContainer}>
                <MapScreen></MapScreen>
              </div>
            </div>
          )}

          <div
            className={fasilitasContainer}
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="300"
          ></div>
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
        >
          <div className={container} style={{ gap: "45px" }}>
            <img src={rundown} alt="rundown" />
            <div style={{ paddingTop: "120px" }}>
              <div className={buttonMascot}>Race Guidelines</div>
              <div className={buttonMascot} style={{ marginTop: "32px" }}>
                Twibbon
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigacity;
