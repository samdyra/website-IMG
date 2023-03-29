import React, { useState } from "react";
import style from "./style.module.scss";
import Header from "../../Components/HeaderPage";
import Gallery from "../../Components/Slider";
import background from "../../assets/images/senator.png";
import useLoadData from "../../Helpers/useLoadData";
import { Modal } from "../../Components";
import insta from "../../assets/images/senatorIG.png";
const kabarKesenatoran = () => {
  const { containerSection, containerSectionMedia } = style;
  const [ openModal, setOpenModal ] = useState(false);
  const [ dataModal, setDataModal ] = useState({})


  const handleOpenModal = (item) => {
    setDataModal(item)
    setOpenModal(true);
  };
  const dataInternal = useLoadData("isuKampus", 10)
  const dataSenator = useLoadData("headlineKesenatoran", 1)
  const descSenator = dataSenator && dataSenator[0]?.headline

  return (
    <div>
      <Modal
        ModalName="slider"
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={dataModal}
      ></Modal>
      <Header desc={descSenator} background={background} isSenator/>
      <div className={containerSectionMedia}>
        <h1>Media Kesenatoran</h1>
        <img onClick={() => window.open("https://www.instagram.com/kesenatoranimg/")} src={insta}></img>
      </div>
      <div className={containerSection}>
        <h1>Inkubasi Isu Kampus</h1>
        <Gallery sliderName="verticalcard" data={dataInternal} pressItem={handleOpenModal}/>
      </div>
    </div>
  );
};

export default kabarKesenatoran;
