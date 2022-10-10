import React, { useEffect, useState } from "react";
import { SliderData } from "../../assets/object/SliderData";
import { Carousel3D, ProgressBarCarousel, Modal } from "../../Components";
import style from "./style.module.scss";

import Aos from "aos";
import "aos/dist/aos.css";

const Geopoint = () => {
  const {
    container,
    carouselcontainer,
    pageBackground,
    title,
    containerModal,
    containerMascot,
    buttonMascot,
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

      <div className={pageBackground}>
        <div className={title}>
          <h1>Geopoint IMG-ITB 2023</h1>
          <h2>Spread The Joy in Our Journey</h2>
        </div>
        <div className={container}>
          <Carousel3D />
        </div>
        <div className={containerMascot}>
          <div
            style={{ flexDirection: "collumn", marginLeft: "50px" }}
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset="300"
          >
            <p>
              Perkenalkan, Gegep dan Eggy! Dua sejoli ini adalah teman
              perjalanan kamu di Geopoint IMG–ITB yang akan menemani dan
              memberikan informasi yang kamu butuhkan.
            </p>
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
            src={SliderData[1].image}
            alt=""
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-offset="300"
          />
        </div>
        <div className={container}>
          <ProgressBarCarousel />
        </div>
        <div className={container}></div>
        <div className={container}></div>
      </div>
    </>
  );
};

export default Geopoint;
