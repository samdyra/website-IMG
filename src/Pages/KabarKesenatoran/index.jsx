import React, {useState} from "react";
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
  const desc = "Di bulan September, Tim Kesenatoran IMG-ITB berhadapan dengan isu di dalam atmosfer eksekutif KM ITB, yaitu Pengesahan Kabinet KM ITB dan Tim PJS MWA WM, FPT dan Pengesahan Panitia Pelaksana Pemilu Raya KM ITB, serta Audiensi Keikutsertaan KM ITB pada Rakernas BEM SI ke-XV."
  const dataInternal = useLoadData("isuKampus", 10)


  return (
    <div>
      <Modal
        ModalName="slider"
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={dataModal}
      ></Modal>
      <Header desc={desc} background={background} isSenator/>
      <div className={containerSection}>
        <h1>Inkubasi Isu Kampus</h1>
        <Gallery sliderName="verticalcard" data={dataInternal} pressItem={handleOpenModal}/>
      </div>
      <div className={containerSectionMedia}>
        <h1>Media Kesenatoran</h1>
        <img onClick={() => window.open("https://www.instagram.com/kesenatoranimg/")} src={insta}></img>
      </div>
    </div>
  );
};

export default kabarKesenatoran;
