import React, { useEffect, useState } from "react";
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

import { sosmedgeo } from "../../assets";

const Geopoint = () => {
  const {
    container,
    pageBackground,
    title,
    containerMascot,
    buttonMascot,
    mascotText,
    titleText,
    teaser,
    timeline,
    sosmed,
    containerMov,
  } = style;

  const [dataModal, setDataModal ] = useState({})
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
        data={dataModal}
      ></Modal>
      {/* Geopoint IMG-ITB 2023 */}
      <div className={pageBackground}>
          <div className={title}>
            <div className={titleText}
            >
              <h1>
                GEOPOINT <br></br> IMG-ITB 2024
              </h1>
            </div>
            <div className={containerMascot}>
          <div
            style={
              isMobile
                ? { flexDirection: "Row" }
                : { flexDirection: "Row", marginLeft: "50px", }
            }
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-offset={isMobile ? "175" : "300"}
          >
            <div className={mascotText}
            
            >
              <p>
              Geopoint IMG-ITB 2024 merupakan kegiatan yang dipersembahkan
               oleh BSO Geopoint Ikatan Mahasiswa Geodesi ITB (IMG-ITB).
               GEOPOINT IMG-ITB 2024 bertujuan untuk mengenalkan 
               keilmuan geodesi dan menyalurkan kebermanfaatan keilmuan 
               Geodesi dan Geomatika kepada masyarakat serta sebagai wadah 
               pengembangan bagi anggota IMG-ITB.
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
            data-aos-offset={isMobile ? "175" : "200"}
          />
        </div>
        </div>
        

        {/* <div className={container} style={{ flexDirection: "column" }}>
        </div>
          {isMobile ? <Carousel3DMobile /> : <Carousel3D />} */}




        <div className={container} 
            style={{
            flexDirection: "column",
            paddingBottom: "170px",
            marginTop: "180px",
          }}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="300">
          <div className={timeline}>
              <h1>Our Timeline</h1>
          </div>
        <div className={teaser}>
          </div>
        {isMobile ? <Carousel3DMobile /> : <Carousel3D />}
        <div style={
              isMobile
                ? { marginTop: "200px" }
                : null }
                 >
          <ProgressBarCarousel />
        </div>
        </div>






        <div
          className={containerMov}
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
            <h1>After Movie</h1>
          </div>
          <div>
            <VideoEmbed />
          </div>

        </div>
        <div className={sosmed}>
            <img
              src={sosmedgeo}
              alt=""
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-offset="50"
            />
          </div>
      </div>
    </>
  );
};

export default Geopoint;
