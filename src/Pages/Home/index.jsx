import React, { useRef, useState, useEffect } from "react";
import style from "./style.module.scss";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Config/firebase/index";

//THREE
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, SpotLight } from "@react-three/drei";

//Styling

import { SliderData, SliderText } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Slider";
const HomeScreen = () => {
  const navigate = useNavigate();

  const {
    container,
    desc,
    logo,
    welcome,
    containerSection,
    judulSection2,
    descSection2,
    nilai,
    judulSection3,
    judulSection4,
    judulSection5,
    organogram,
    containerSectionTop,
    containerSectionKegiatan,
    containerSection2,
    carouselWrapper,
    desctujuan,
    descsifat,
    linetujuan,
    fadeIn,
    fadeOut,
    fadedOut,
    asas,
    easteregg1,
    ketuaContainer,
    ketuaImage,
    star,
    learnMoreButton,
    arrow,
    oval,
  } = style;

  const [index, setIndex] = useState(0);
  const [user] = useAuthState(auth);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (index != 2) {
        return setIndex(index + 1);
      } else return setIndex(0);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

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
          scale={18}
        />
      </group>
    );
  }

  return (
    <div className={container} style={{ overflow: "hidden" }}>
      <div className={containerSectionTop}>
        <div className={star}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={desc}>
              <h2>Welcome to IMG-ITB Official Website</h2>

              <h1>
                IKATAN MAHASISWA <br></br> GEODESI-ITB
              </h1>
              <p>
                Himpunan mahasiswa Ikatan Mahasiswa Geodesi Institut Teknologi
                Bandung yang biasa disingkat IMG-ITB merupakan lanjutan dari
                Ikatan Mahasiswa Geodesi atau IMG yang didirikan pada 16
                September 1952 di Bandung. IMG-ITB sendiri berkedudukan di
                tempat jurusan Teknik Geodesi dan Geomatika berada.
              </p>
              <div className={learnMoreButton} onClick={handleClick}>
                Learn More
                <div className={arrow}></div>
              </div>
            </div>

            <div className={logo}>
              <Canvas
                camera={{
                  fov: 36,
                  position: [50, 40, 35],
                }}
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
        className={containerSection2}
        ref={container2}
        style={{ overflow: "hidden" }}
      >
        <div className={judulSection2}>
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
          <h1>IMG-ITB</h1>
        </div>
        {index === 0 && (
          <div className={asas}>
            <h1>{SliderText[0].title}</h1>

            <p>{SliderText[0].desc}</p>
          </div>
        )}
        ;
        {index === 1 && (
          <>
            <div className={descSection2}>
              <h1>{SliderText[1].title}</h1>
              <div className={desctujuan}>
                <p>{SliderText[1].desc[0]}</p>
                <p>{SliderText[1].desc[1]}</p>
              </div>
            </div>
          </>
        )}
        ;
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

      <div className={containerSection} style={{ overflow: "hidden" }}>
        <div
          className={judulSection3}
          data-aos="fade-right"
          data-aos-duration="750"
          data-aos-offset="430"
        >
          <h1>Susunan Kepengurusan IMG-ITB 2022/2023</h1>
          <div style={{ display: "flex" }}>
            <h2>Struktur IMG-ITB (BPH, </h2>
            <a href="/DPM">DPM,</a>
            <h2> dan BSO)</h2>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="750" data-aos-offset="430">
          <Carousel slides={SliderData} />
        </div>
      </div>

      <div className={containerSectionKegiatan} style={{ overflow: "hidden" }}>
        <div className={judulSection4}>
          <h1>Kegiatan IMG-ITB</h1>
          <div>
            <h3>Ketinggalan Informasi</h3>
            <h3>Berikut Redaksi Acara IMG-ITB yang dapat kamu baca kembali!</h3>
          </div>
        </div>
        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          data-aos-offset="400"
          style={{ overflow: "hidden" }}
        >
          <Gallery sliderName="card" />
        </div>
      </div>

      <div className={container}>
        <div
          className={ketuaContainer}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="400"
        >
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent”{" "}
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
            <div className={ketuaImage}></div>
            <div>
              <h1>M. Daffa Rizki El-Islami .S</h1>
              <h2>Ketua Umum BPH IMG-ITB 2022/2023</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={judulSection5}>
        <h1>Our Delightful Moments</h1>
      </div>
      <div style={{ overflow: "hidden", marginBottom: "100px" }}>
        <Gallery sliderName="gallery" />
      </div>
    </div>
  );
};

export default HomeScreen;
