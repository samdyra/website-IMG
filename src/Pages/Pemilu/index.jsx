import React, { useState, useEffect } from "react";
import s from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";
import LogoPansusFix from "../../assets/images/LogoPansusFix.png";
import ProgressBar from "./ProgressBar";
import videoplayback from "../../assets/video/videoplayback.webm";
import { roy, ringgas, alvito } from "../../assets";

const Pemilu = () => {
  const { buttonDokumen } = s;
  const [ openModalRoy ] = useState(false);
  const [ openModalRinggas ] = useState(false);
  const [ openModalVito ] = useState(false);

  useEffect(() => {
    openModalRoy
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModalRoy ]);

  useEffect(() => {
    openModalRinggas
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModalRinggas ]);

  useEffect(() => {
    openModalVito
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [ openModalVito ]);

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.backgroundTop}>
          <video autoPlay playsInline muted loop src={videoplayback} />
          <div className={s.backgroundTop2}></div>
        </div>

        <div className={s.containerTop}>
          <img src={LogoPansusFix} alt="" />
          {isMobile ? (
            <h1>
              Panitia Khusus <br /> Pemilu IMG-ITB 2024
            </h1>
          ) : (
            <h1 style={{  fontSize: 40}}>Panitia Khusus Pemilu IMG-ITB 2024</h1>
          )}

          <h2 style={{ fontSize: 25}}>
            #PEMILUBERDAULATIMGKUAT
          </h2>
          <button
            className={buttonDokumen}
            onClick={() =>
              window.open("https://linktr.ee/PemiluIMG2024", "_blank")
            }
          >
            Dokumen Pemilu IMG-ITB 2024
          </button>
        </div>
        <ProgressBar />

        <div className={s.container}>
          <h1 style={{ marginBlock: "100px", fontSize: 50}}> CALON KETUA UMUM IMG-ITB 2024/2025</h1>
        </div>  
        <div>

<div className="flex gap-[24px] mb-[125px]">
           <div className={s.caketum_container}>
                <img src={roy} alt="" />
              </div>
          
              <div className={s.caketum_container}>
                <img src={ringgas} alt="" />
              </div>

              <div className={s.caketum_container}>
                <img src={alvito} alt="" />
              </div>
              </div>
      </div>
      </div>
     
      <div className="flex flex-row justify-between w-screen items-center">
        <div className="border-solid border-2 w-1/5 h-0 border-[#FF4A01] sm:w-1/3 mb-[60px]"/>
        <h3 className="text-4xl font-montserratsemibold sm:text-4xl mb-[60px]">VOTE YOUR LEADER!</h3>
        <div className="border-solid border-2 w-1/5 h-0 border-[#FF4A01] sm:w-1/3 mb-[60px]"/>
      </div>

      <div className="flex flex-row justify-center" onClick={() => window.open("https://forms.gle/CACUWHGwUrUKQvLAA")}>
        <div/>
        <div className="text-3xl font-montserratmedium border border-solid py-1 px-8 rounded-lg bg-[#FF4A01] border-[#FF4A01] text-white mb-20 md:text-4xl md:px-12 shadow-2xl shadow-black cursor-pointer">VOTE</div>
        <div />
      </div>
    </>
  );
};

export default Pemilu;
