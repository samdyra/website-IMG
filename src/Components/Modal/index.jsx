import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import { SliderData } from "../../assets/object/SliderData";
import { gegepmodal } from "../../assets";
import Slider from "../Slider";

const Modal = ({ ModalName, open, onClose }) => {
  const {
    modalButton,
    overlay,
    modalContainer,
    modalContainer2,
    content2,
    modalRight,
    closeBtn,
    content,
    btnContainer,
    btnPrimary,
    btnOutline,
    bold,
    heading,
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
            className={modalContainer2}
          >
            <p className={closeBtn} onClick={onClose}>
              X
            </p>
            <div className={content2}>
              <div>
                <h1>event 1</h1>
                <h2>tanggal</h2>
                <p>
                  Overwork is the expression used to define the cause of working
                  too hard, too much, or too long. It can be also related to the
                  act of working beyond one's strength or capacity, causing
                  physical and/or mental distress in the process.
                </p>
              </div>
              <Slider sliderName="modalimg" />
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
