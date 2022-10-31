import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import { isMobile } from "../../Helpers/mobileResponsive";
import {
  Carousel3D,
  Carousel3DMobile,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";

import Aos from "aos";
import "aos/dist/aos.css";
import { gegepdesc } from "../../assets";

const Geopoint = () => {
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
      <Modal
        ModalName="geopoint"
        open={openModal}
        onClose={() => setOpenModal(false)}
      ></Modal>
      {/* Geopoint IMG-ITB 2023 */}
      <div className={pageBackground}>
        <div className={container} style={{ flexDirection: "column" }}>
          <div className={title}>
            <div className={titleText}>
              <h1>
                Geopoint <br></br> IMG-ITB 2023
              </h1>
              <h2>Spread The Joy in Our Journey</h2>
            </div>
          </div>
          {isMobile ? <Carousel3DMobile /> : <Carousel3D />}
        </div>
        <div className={containerMascot}>
          <div
            style={
              isMobile
                ? { flexDirection: "collumn" }
                : { flexDirection: "collumn", marginLeft: "50px" }
            }
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset={isMobile ? "175" : "300"}
          >
            <div className={mascotText}>
              <p>
                Perkenalkan, Gegep dan Eggy! Dua sejoli ini adalah teman
                perjalanan kamu di Geopoint IMG–ITB yang akan menemani dan
                memberikan informasi yang kamu butuhkan.
              </p>
            </div>
            <div
              className={buttonMascot}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Read More
            </div>
          </div>
          <img
            src={gegepdesc}
            alt=""
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="300"
          />
        </div>
        <div
          className={container}
          // data-aos="fade-up"
          // data-aos-duration="600"
          // data-aos-offset="625"
        >
          <ProgressBarCarousel />
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

export default Geopoint;
