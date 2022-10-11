import React, { useRef, useState, useEffect } from "react";
import style from "./style.module.scss";

import Aos from "aos";
import "aos/dist/aos.css";

//THREE
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, SpotLight } from "@react-three/drei";

//Styling
import diagram from "../../assets/images/diagram.png";
import background from "../../assets/images/background.png";
import { SliderData, SliderText } from "../../assets/object/SliderData";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Slider";
const HomeScreen = () => {
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
  } = style;

  const [index, setIndex] = useState(0);

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div className={desc}>
            <h2>Welcome to IMG-ITB Official Website</h2>
            <h1>
              IKATAN MAHASISWA <br></br> GEODESI-ITB
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              doloribus, fuga molestiase at asperiores minima fugit, sapiente
              rem voluptates eum id dolor ullam ipsam architecto tenetur sequi
              iusto. Aliquid, sit.
            </p>
          </div>
          <div className={logo}>
            <Canvas
              camera={{
                fov: 36,
                position: [30, 30, 45],
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

      <div className={containerSection2} style={{ overflow: "hidden" }}>
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
          <div className={descSection2}>
            <div className={asas}>
              <h1>{SliderText[0].title}</h1>
              <p>{SliderText[0].desc}</p>
            </div>
          </div>
        )}
        ;
        {index === 1 && (
          <>
            <div className={descSection2}>
              <h1>{SliderText[1].title}</h1>
              <div className={descsifat}>
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
                <div className={linetujuan}></div>
                <p>{SliderText[2].desc[1]}</p>
                <div className={linetujuan}></div>
                <p>{SliderText[2].desc[2]}</p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className={containerSection} style={{ overflow: "hidden" }}>
        <div className={judulSection3} data-aos="fade-left">
          <h1>Kepengurusan IMG-ITB 2022/2023</h1>
        </div>
        <div
          className={organogram}
          data-aos="fade-up"
          data-aos-duration="750"
          data-aos-offset="500"
        >
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

      <div className={judulSection5}>
        <h1>Our Delightful Moments</h1>
      </div>
      <div style={{ overflow: "hidden" }}>
        <Gallery sliderName="gallery" />
      </div>
    </div>
  );
};

export default HomeScreen;
