import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { isMobile } from "../../Helpers/mobileResponsive";

const Modal = ({ ModalName, open, onClose, data }) => {
  const {
    modalButton,
    overlay,
    modalContainer,
    modalContainer2,
    content2,
    modalRight,
    closeBtn,
    modalContainer2Mobile,
    closeBtnMobile
  } = style;

  // `${container} isTrue && ${suatukkelas}`;
  const windowOffset = window.scrollY;
  if (!open) return null;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {ModalName === "slider" ? (
        <div onClick={onClose} className={overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            onScroll={(e) => {
              e.stopPropagation();
            }}
            className={!isMobile ? modalContainer2 : modalContainer2Mobile}
          >
            <p className={isMobile ? closeBtnMobile : closeBtn} onClick={onClose}>
              X
            </p>
            <div className={content2}>
              <div>
                <h1>{data.judul}</h1>
                <h2>{data.date}</h2>
                {isMobile && <img src={data.image}></img>}
                <p>
                  {data.redaksi}
                </p>
              </div>
              {!isMobile && <img src={data.image}></img>}
            </div>
          </div>
        </div>
      ) : ModalName === "geopoint" ? (
        <div onClick={onClose} className={overlay}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            onScroll={(e) => {
              e.stopPropagation();
            }}
            className={modalContainer}
          >
            <div className={modalRight}>
              <p className={closeBtn} onClick={onClose}>
                X
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
