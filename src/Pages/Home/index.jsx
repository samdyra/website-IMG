/* eslint-disable react/no-unknown-property */
import React, {
  useRef, useState, useEffect
} from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { SliderText } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Slider";
import {
  gegep1, gegep2, daki
} from "../../assets";
import { Modal } from "../../Components";
import { isMobile } from "../../Helpers/mobileResponsive";
import useLoadData from "../../Helpers/useLoadData";
import { Organogram } from "../../assets";
import SideNav from "../../Components/SideNav";

const HomeScreen = () => {
  const navigate = useNavigate();

  const {
    container,
    desc,
    logo,
    containerSection,
    judulSection2,
    descSection2,
    judulSection3,
    judulSection4,
    judulSection5,
    containerSectionTop,
    containerSectionKegiatan,
    containerSection2,
    desctujuan,
    fadeIn,
    fadeOut,
    asas,
    ketuaContainer,
    ketuaImage,
    star,
    learnMoreButton,
    arrow,
    oval,
    gegep,
    type,
    landingPage,
    sifatMobile,
    containerSection2Mobile
  } = style;
  const dataKegiatan = useLoadData("kegiatan")
  const dataFoto = useLoadData("fotoHome")
  const [ index, setIndex ] = useState(0);
  const [ gegepImage, setGegepImage ] = useState(gegep1);
  const [ dataModal, setDataModal ] = useState({})
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const container2 = useRef(null);

  const handleClick = () => {
    container2.current?.scrollIntoView({ behavior: "smooth" });
  };

  function Model(props) {
    const models = useRef();
    const { nodes, materials } = useGLTF("/gray.glb");
    useFrame(({ clock }) => {
      models.current.rotation.y = clock.getElapsedTime() / 6;
    });
    return (
      <group {...props} dispose={null} ref={models}>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          scale={isMobile ? 10 : 18}
        />
      </group>
    );
  }
  function TypeWriter() {
    return (
      <Typewriter
        options={{
          strings: gegepImage.includes("gegep1")
            ? [ "Hi I'm Gegep! Welcome!", "See more about Geopoint here!" ]
            : [ "Click Me!" ],
          autoStart: true,
          loop: true,
        }}
      />
    );
  }

  const [ openModal, setOpenModal ] = useState(false);

  const handleOpenModal = (item) => {
    setDataModal(item)
    setOpenModal(true);
  };
  useEffect(() => {
    openModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModal ]);

  const container1 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const wrapper = useRef(null);

  const refs = [ container1, container2, container3, container4, container5 ];






  return (
    <div>
      <Modal
        ModalName="slider"
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={dataModal}
      ></Modal>

      <div className={container} style={{ overflow: "hidden" }} ref={wrapper}>
        <SideNav refs={refs} containerRef={wrapper}/>
        <div className={containerSectionTop} ref={container1}
        >
          <div className={star}>
            <div className={landingPage}>
              <div className={desc}>
                <h2>Welcome to IMG-ITB Official Website</h2>

                {isMobile ? (
                  <h1>IKATAN MAHASISWA GEODESI-ITB</h1>
                ) : (
                  <h1>
                    IKATAN MAHASISWA <br></br> GEODESI-ITB
                  </h1>
                )}

                <p>
                  Himpunan mahasiswa Ikatan Mahasiswa Geodesi Institut Teknologi
                  Bandung yang biasa disingkat IMG-ITB merupakan lanjutan dari
                  Ikatan Mahasiswa Geodesi atau IMG yang didirikan pada 16
                  September 1952 di Bandung. IMG-ITB sendiri berkedudukan di
                  tempat jurusan Teknik Geodesi dan Geomatika berada.
                </p>
                {isMobile ? null : (
                  <div className={learnMoreButton} onClick={handleClick}>
                    Learn More
                    <div className={arrow}></div>
                  </div>
                )}
              </div>

              <div className={logo}>
                <Canvas
                  camera={
                    isMobile
                      ? {
                        fov: 20,
                        position: [ 50, 40, 35 ],
                      }
                      : {
                        fov: 36,
                        position: [ 50, 40, 35 ],
                      }
                  }
                >
                  <ambientLight color={300} intensity={10}></ambientLight>

                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                  ></OrbitControls>
                  <Model></Model>
                </Canvas>
              </div>
            </div>
          </div>
        </div>

        <div className={oval}></div>
        <div
          className={!isMobile ? containerSection2 : containerSection2Mobile}
          ref={container2}
          style={{ overflow: "hidden" }}
        >
          <div className={judulSection2}>
            <div style={{ display: "flex", fontFamily: "jakarta" }}>
              <h1
                className={index == 0 ? fadeIn : fadeOut}
                onClick={() => setIndex(0)}
              >
                Asas,
              </h1>
              <h1
                className={index == 1 ? fadeIn : fadeOut}
                onClick={() => setIndex(1)}
              >
                Sifat,
              </h1>
              <h1>dan</h1>
              <h1
                className={index == 2 ? fadeIn : fadeOut}
                onClick={() => setIndex(2)}
              >
                Tujuan
              </h1>
            </div>
            <h1>IMG-ITB</h1>
          </div>
          {index === 0 && (
            <div className={asas}>
              <h1>{SliderText[0].title}</h1>

              <p>{SliderText[0].desc}</p>
            </div>
          )}

          {index === 1 && (
            <>
              <div
                className={isMobile ? null : descSection2}
                style={
                  isMobile
                    ? {
                      height: "300px",
                      marginTop: "40px",
                    }
                    : null
                }
              >
                <div className={sifatMobile}>
                  <h1>{SliderText[1].title}</h1>
                  <div className={desctujuan}>
                    <p>{SliderText[1].desc[0]}</p>
                    <p>{SliderText[1].desc[1]}</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {index === 2 && (
            <>
              <div className={descSection2}>
                <h1>{SliderText[2].title}</h1>
                <div className={desctujuan}>
                  <p>{SliderText[2].desc[0]}</p>

                  <p>{SliderText[2].desc[1]}</p>

                  <p>{SliderText[2].desc[2]}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className={containerSection} ref={container3}
          style={{ overflow: "hidden" }}>
          <div
            className={judulSection3}
            data-aos={isMobile ? "fade-up" : "fade-right"}
            data-aos-duration="750"
            data-aos-offset={isMobile ? "200" : "250"}
          >
            <h1>Susunan Kepengurusan IMG-ITB 2022/2023</h1>
            <div
              style={
                isMobile
                  ? { display: "flex", margin: "0 auto" }
                  : { display: "flex" }
              }
            >
              <h2>Struktur IMG-ITB (BPH, </h2>
              <a href="/DPM">DPM,</a>
              <h2> dan BSO)</h2>
            </div>
          </div>
          <div
            data-aos={isMobile ? "fade-up" : "fade-left"}
            data-aos-duration="750"
            data-aos-offset={isMobile ? "200" : "430"}
          >
            <Carousel slides={Organogram} />
          </div>
        </div>

        <div
          className={containerSectionKegiatan}
          ref={container4}
          style={{ overflow: "hidden" }}
        >
          <div className={judulSection4}>
            <h1 style={{ marginBottom: "20px" }}>Kegiatan IMG-ITB</h1>
            <div>
              <h3>Ketinggalan Informasi?</h3>
              <h3 style={{ marginBottom: "20px" }}>
                Berikut Redaksi Acara IMG-ITB yang dapat kamu baca kembali!
              </h3>
            </div>
          </div>
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-offset="400"
            style={{ overflow: "hidden" }}
          >
            <Gallery sliderName="card" pressItem={handleOpenModal} data={dataKegiatan} />
          </div>
        </div>

        <div className={container}
        >
          <div
            className={ketuaContainer}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="1"
          >
            <div>
              <p>
                Banyak proses yang sudah dijalani, Jatuh bangun telah dilewati,
                Menangis dan tertawa sudah pasti, Pertanyaannya, akan jadi apa
                IMG kedepannya? Ketahuilah Kamerad, Jawaban tersebut ada di
                tangan kita semua Bersama-sama membangun IMG-ITB Menyalakan api
                gelora semangat dalam jiwa kita, dalam hati kita. Jiwa
                persatuan, demi satu tujuan. Kejayaan IMG-ITB. Akhir kata, IMG
                Sampai Mampus! Sekali Kamerad, Selamanya Kamerad! IMG Satu Jiwa,
                Kita Kompak Pasti Jaya!
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div className={ketuaImage}>
                <img src={daki} alt="daki" />
              </div>
              <div>
                <h1>M. Daffa Rizki El-Islami .S</h1>
                <h2>Ketua Umum BPH IMG-ITB 2022/2023</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={judulSection5} ref={container5}
        >
          <h1>Our Delightful Moments</h1>
        </div>
        <div style={{ marginBottom: "100px" }}>
          <Gallery dataImage={dataFoto} sliderName={isMobile ? "modalimg" : "gallery"} />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
