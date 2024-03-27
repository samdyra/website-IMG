import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sosmedgeo, GemasSlider, slidergemas } from "../../assets";
import Carousel from "../../Components/Carousel/Carousel";

import {
  Carousel3D,
  ProgressBarCarousel,
  Modal,
  VideoEmbed,
} from "../../Components";
import style from "./style.module.scss";
import { gegepgemas, rundown, aktivitas, gunalahan, ortho, rekomen } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";
import SliderDataGemas from "../../assets/object/GemasSlider";
import SliderDataPoster from "../../assets/object/PosterSlider";

const Gemas = () => {
  const navigate = useNavigate();
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
    sliderGem,
    galeri,
    sosmed,
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
        <div style={{ zIndex: 100 }}></div>
        <div className={containerTop}
        style={{alignItems:"center"}}>

          <div className={title}>
            <div className={titleTextH2}>
              <h1>Geopoint IMG-ITB 2024 Present:</h1>
            </div>
            <div className={titleText}>
              <div>GEMAS</div>
            </div>
          </div>

        </div>
        <div className={containerMascot}>
        <div className={gegepHeader}>
            <img src={gegepgemas} alt="gegepgemas" />
          </div>
          <div>
            <div className={mascotText}>

              <div
              // data-aos="fade-left"
              // data-aos-duration="600"
              // data-aos-offset="300"
              >
                <p>
                𝗚𝗘𝗠𝗔𝗦 atau Geodesi ke Masyarakat merupakan program pengabdian masyarakat oleh Geopoint IMG-ITB 2024. GEMAS tahun ini meliput beberapa kegiatan:
                <br></br>•Analisis Spasial untuk Optimalisasi Penempatan Tempat Pembuangan Sampah
                <br></br>•Edukasi Mitigasi Bencana
                <br></br>•Pelatihan Pembuatan Peta
                <br></br>•Sosialisasi Pemilihan Sampah
                <br></br>Dengan adanya GEMAS yang mengimplementasikan keilmuan Geodesi dan Geomatika, diharapkan program ini dapat bermanfaat dan memberikan dampak nyata untuk masyarakat 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={container}>
          <div className={galeri}>
              <div 
              data-aos="fade-right"
              data-aos-duration="300"
              data-aos-offset="200"
              className={titleTextH3}
              > 
                <h1>Gallery <br></br> GEMAS</h1>
              </div>
              <div
                className={buttonMascot}
                onClick={() =>
                  window.open(
                    "https://bit.ly/GaleriGEMAS",
                    "_blank"
                  )
                }
                data-aos="fade-right"
                data-aos-duration="400"
                data-aos-offset="200"
              >
                Unduh Produk GEMAS
              </div>
          </div>
          {petaRute === false ? (
            <div
              data-aos="fade-right"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              <div className={rutePetaButtonContainer}>
                <div className={rutePetaButton}>Poster</div>
                <div
                  className={rutePetaButton}
                  style={{ background: "#4A777E", color: "#F5FCB5" }}
                  onClick={() => setPetaRute(true)}
                >
                  Peta
                </div>
                
              </div>
              <div className={rutePetaContainer}>
                  <Carousel className={sliderGem} slides={SliderDataPoster} />
              </div>
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
                  Poster
                </div>
                <div className={rutePetaButton}>Peta</div>
              </div>
              <div className={rutePetaContainer}>
                  <Carousel slides={SliderDataGemas} />
              </div>
              
            </div>
          )}

         
        </div>

        <div
          className={container}
          style={{
            marginTop: "103px",
            marginBottom: "20px"
          }}

        >
                  <div className={sosmed}>
            <img
              src={sosmedgeo}
              alt=""
              data-aos="fade-left"
              data-aos-duration="600"
              data-aos-offset="50"
            />
          </div>
              

        </div>
      </div>
    </>
  );
};

export default Gemas;
