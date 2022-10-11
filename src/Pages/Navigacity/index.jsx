import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { CountDown } from "./Components";

import Aos from "aos";
import "aos/dist/aos.css";

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
    teaser,
    fasilitasContainer,
    rutePetaContainer,
    rutePetaButton,
    rutePetaButtonContainer,
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
        <div className={title}>
          <div className={titleText}>
            <h1>Ferrari 458 Speciale</h1>
            <h2>Spread The Joy in Our Journey</h2>
          </div>
        </div>
        <div className={container}>
          <CountDown />
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
            <div>
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
            <div>
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
              <div className={rutePetaContainer}></div>
            </div>
          )}

          <div className={fasilitasContainer}></div>
        </div>
        <div
          className={container}
          style={{
            flexDirection: "column",
            paddingBottom: "170px",
            marginTop: "180px",
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="300"
        >
          <div className={teaser}>
            <h1>Teaser Geopoint IMG-ITB 2023</h1>
          </div>
          <div>
            <VideoEmbed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigacity;
