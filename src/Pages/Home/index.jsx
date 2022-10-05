import React, { useRef, Suspense, useEffect } from "react";
import style from "./style.module.scss";
import { useState, useUpdate } from "react";

//THREE
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

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
    let interval = setInterval(() => {
      if (index != 2) {
        return setIndex(index + 1);
      } else return setIndex(0);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  function Model(props) {
    const { nodes, materials } = useGLTF("/gray.glb");
    return (
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials["Material.001"]}
          scale={17}
        />
      </group>
    );
  }

  // function Model(props) {
  //   const models = useRef();
  //   const ref = useRef((models) => {
  //     models.rotateY(0, 1000, 0);
  //   }, []);
  //   const { nodes, materials } = useGLTF("./globefix.gltf");
  //   useFrame(({ clock }) => {
  //     models.current.rotation.x = clock.getElapsedTime() / 7;
  //     models.current.rotation.y = clock.getElapsedTime() / 5;
  //   });
  //   return (
  //     <group {...props} dispose={null} ref={models}>
  //       <group
  //         scale={0.2}
  //         rotation={[-Math.PI / 2, 0, 0]}
  //         position={[0.01, 0, 0]}
  //         ref={ref}
  //       >
  //         <mesh
  //           geometry={nodes.Ground.geometry}
  //           material={materials.Sand}
  //           position={[-5.54, -74.67, 83.97]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Grass.geometry}
  //           material={materials.Grass}
  //           position={[-4.57, -77.39, 66.77]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Water.geometry}
  //           material={materials.Water}
  //           position={[-2.16, -68.18, 75.35]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Mountains.geometry}
  //           material={materials.Rock}
  //           position={[-13.17, -57.3, 26.59]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Mountaintop.geometry}
  //           material={materials["Grey material"]}
  //           position={[47.07, 37.11, 9.66]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Rocky_Mountains.geometry}
  //           material={materials.Rocks}
  //           position={[-5.32, -81.5, 109.21]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Volcano.geometry}
  //           material={materials["Volcanic rocks"]}
  //           position={[10.1, -16.09, 147.75]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Lava.geometry}
  //           material={materials.Lava}
  //           position={[4.37, -7.17, 156.32]}
  //           rotation={[-Math.PI / 2, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.City.geometry}
  //           material={materials.Metal}
  //           position={[19.9, 18.79, 61.46]}
  //           rotation={[0, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Forest.geometry}
  //           material={materials.Trees}
  //           position={[-21.64, -24.76, 10.59]}
  //           rotation={[0, 0, Math.PI]}
  //           scale={18.19}
  //         />
  //         <mesh
  //           geometry={nodes.Smoke.geometry}
  //           material={materials.Fume}
  //           position={[13.83, 4.85, 159.67]}
  //           scale={18.19}
  //         />
  //       </group>
  //     </group>
  //   );
  // }

  return (
    <div className={container}>
      <div className={containerSectionTop}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
            <Canvas camera={{ fov: 35, position: [0, 0, 65] }}>
              <ambientLight color={200} intensity={10}></ambientLight>
              <directionalLight
                castShadow={true}
                intensity={2}
                position={[50, 50, 50]}
              ></directionalLight>
              <OrbitControls
                enablePan={false}
                enableZoom={true}
                enableRotate={true}
              ></OrbitControls>
              <Model></Model>
            </Canvas>
          </div>
        </div>
      </div>

      <div className={containerSection2}>
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

      <div className={containerSection}>
        <div className={judulSection3}>
          <h1>Kepengurusan IMG-ITB 2022/2023</h1>
        </div>
        <div className={organogram}>
          <Carousel slides={SliderData} />
        </div>
      </div>

      <div className={containerSectionKegiatan}>
        <div className={judulSection4}>
          <h1>Kegiatan IMG-ITB</h1>
          <div>
            <h3>Ketinggalan Informasi</h3>
            <h3>Berikut Redaksi Acara IMG-ITB yang dapat kamu baca kembali!</h3>
          </div>
        </div>
        <Gallery sliderName="card" />
      </div>

      <div className={judulSection5}>
        <h1>Our Delightful Moments</h1>
      </div>
      <div>
        <Gallery sliderName="gallery" />
      </div>
    </div>
  );
};

export default HomeScreen;
