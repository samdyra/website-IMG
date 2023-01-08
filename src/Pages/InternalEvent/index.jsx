import React, { useState } from "react";
import style from "./style.module.scss";
import Gallery from "../../Components/Slider";
import useLoadData from "../../Helpers/useLoadData";
import { Modal } from "../../Components";

const internalEvent = () => {
  const { container, containerSection } = style;
  const dataInternal = useLoadData("internal")

  const [ openModal, setOpenModal ] = useState(false);
  const [ dataModal, setDataModal ] = useState({})


  const handleOpenModal = (item) => {
    setDataModal(item)
    setOpenModal(true);
  };

  return (
    <>
      <Modal
        ModalName="slider"
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={dataModal}
      ></Modal>
      <div className={container}>
        <div className={containerSection}>
          <div>
            <h1>Internal Events in IMG-ITB</h1>
          </div>
          <div>
            <button>Our Internal Event Dates</button>
          </div>
          <Gallery sliderName="verticalcard" data={dataInternal} pressItem={handleOpenModal} />
        </div>
      </div>
    </>
  );
};

export default internalEvent;
